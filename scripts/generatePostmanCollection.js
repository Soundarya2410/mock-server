#!/usr/bin/env node
/**
 * Generate Postman collection from extracted_data.json + serviceMeta.js
 *
 * Uses real API paths (not /mock/...) with URL-path matching,
 * and reads current request/response bodies from extracted_data.json.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const extracted = JSON.parse(fs.readFileSync(path.join(ROOT, 'extracted_data.json'), 'utf8'));
const serviceMeta = require(path.join(ROOT, 'src', 'data', 'serviceMeta'));

const SERVICE_KEY_MAP = {
  'Virustotal': 'virustotal',
  'Okta': 'okta',
  'Bitdefender Cloud': 'bitdefender_cloud',
  'Sophos central': 'sophos_central',
  'Sentinelone': 'sentinelone',
  'Crowdstrike Falcon': 'crowdstrike_falcon',
  'Cisco Duo': 'cisco_duo'
};

function extractApiPath(apiUrl) {
  if (!apiUrl || apiUrl === 'No API' || apiUrl.startsWith('Dynamic')) return null;
  const m = apiUrl.match(/^https?:\/\/[^\/]+(\/.*?)(?:\?.*)?$/);
  if (!m) return null;
  // Remove {templateParam} path segments (e.g. /{userLogin} -> '')
  return m[1].replace(/\/\{[^}]+\}/g, '');
}

function buildUrlObject(pathStr) {
  const parts = pathStr.replace(/^\//, '').split('/');
  return {
    raw: '{{baseUrl}}' + pathStr,
    host: ['{{baseUrl}}'],
    path: parts
  };
}

function prettyBody(obj) {
  if (typeof obj === 'string') {
    try { return JSON.stringify(JSON.parse(obj), null, 2); } catch (_) { return obj; }
  }
  return JSON.stringify(obj, null, 2);
}

// Build collection
const collection = {
  info: {
    _postman_id: 'cb8ce5a7-55ad-4161-a0db-be98c9bcd8b3',
    name: 'Mock Server - Security Products (286 Functions)',
    description:
      'Postman collection for the Mock Security Products Server.\n\n' +
      'Contains all 286 functions across 7 services.\n' +
      'Each request hits the real API path using URL-path matching.\n\n' +
      'Base URL: http://localhost:3000',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
  },
  variable: [{ key: 'baseUrl', value: 'http://localhost:3000', type: 'string' }],
  item: []
};

// Utility items
collection.item.push({
  name: 'Health Check',
  request: {
    method: 'GET',
    header: [],
    url: buildUrlObject('/health'),
    description: 'Check server health status'
  }
});
collection.item.push({
  name: 'List All Services',
  request: {
    method: 'GET',
    header: [],
    url: buildUrlObject('/mock'),
    description: 'List all available services and their functions'
  }
});

// Per-service folders
for (const [displayName, entries] of Object.entries(extracted)) {
  const serviceKey = SERVICE_KEY_MAP[displayName] || displayName.toLowerCase().replace(/\s+/g, '_');
  const meta = serviceMeta[serviceKey];
  const fnCount = entries.length;

  const folder = {
    name: `${displayName} (${fnCount} functions)`,
    description: `Mock endpoints for ${displayName} service.`,
    item: []
  };

  for (const entry of entries) {
    const fnMeta = meta ? meta.functions.find(f => f.name === entry.functionName) : null;
    const method = fnMeta ? fnMeta.method : 'POST';
    const apiUrl = entry.api || (fnMeta ? fnMeta.api : '');
    const localPath = extractApiPath(apiUrl);
    const endpointPath = localPath || `/mock/${serviceKey}/${entry.functionName}`;

    let reqBody;
    try { reqBody = JSON.parse(entry.request); } catch (_) { reqBody = entry.request; }
    let respBody;
    try { respBody = JSON.parse(entry.response); } catch (_) { respBody = entry.response; }

    const rawReqStr = prettyBody(reqBody);
    const rawRespStr = prettyBody(respBody);

    // All services use URL-path matching (no X-Function-Name header needed)
    let headers;
    if (displayName === 'Virustotal') {
      if (method === 'POST') {
        headers = [
          { key: 'content-type', value: 'application/x-www-form-urlencoded' },
          { key: 'accept', value: 'application/json' }
        ];
      } else {
        headers = [{ key: 'accept', value: 'application/json' }];
      }
    } else if (displayName === 'Sentinelone') {
      // Group B: 3 DELETE functions with explicit headerMap (Content-Type + Accept)
      const deleteWithAccept = [
        'sentinelone_deleteDetectionRule',
        'sentinelone_deleteIOC',
        'sentinelone_removeItemFromWhiteList'
      ];
      // Group C: 6 functions with no headers at all
      const noHeaders = [
        'sentinelone_deleteGroup',
        'sentinelone_expireSite',
        'sentinelone_getAccounts',
        'sentinelone_getDVQueryStatus',
        'sentinelone_getServiceUsers',
        'sentinelone_getThreatNotes'
      ];
      if (deleteWithAccept.includes(entry.functionName)) {
        headers = [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Accept', value: 'application/json' }
        ];
      } else if (noHeaders.includes(entry.functionName)) {
        headers = [];
      } else {
        // Group A: 37 functions with content-type: application/json
        headers = [{ key: 'Content-Type', value: 'application/json' }];
      }
    } else if (displayName === 'Sophos central') {
      // Pattern A: 3 functions with X-Tenant-ID only (no content-type)
      const sophosNoContentType = [
        'sophoscentral_listAlerts',
        'sophoscentral_getAlert',
        'sophoscentral_listEndpoint'
      ];
      // Pattern C: 7 DELETE functions with X-Tenant-ID + Accept
      const sophosDeleteWithAccept = [
        'sophoscentral_deleteWhitelistItem',
        'sophoscentral_deleteBlockedItem',
        'sophoscentral_deleteScanExclusion',
        'sophoscentral_deleteExploitMitigation',
        'sophoscentral_deleteUserGroup',
        'sophoscentral_deleteUser',
        'sophoscentral_deleteEndpointGroup'
      ];
      // Pattern D: 2 functions with X-Tenant-ID + content-type + Accept
      const sophosAllThree = [
        'sophoscentral_addUserInUserGroup',
        'sophoscentral_deleteUserInUsergroup'
      ];
      if (sophosNoContentType.includes(entry.functionName)) {
        headers = [
          { key: 'X-Tenant-ID', value: '1234' }
        ];
      } else if (sophosDeleteWithAccept.includes(entry.functionName)) {
        headers = [
          { key: 'X-Tenant-ID', value: '1234' },
          { key: 'Accept', value: 'application/json' }
        ];
      } else if (sophosAllThree.includes(entry.functionName)) {
        headers = [
          { key: 'X-Tenant-ID', value: '1234' },
          { key: 'content-type', value: 'application/json' },
          { key: 'Accept', value: 'application/json' }
        ];
      } else {
        // Pattern B: 38 functions with X-Tenant-ID + content-type
        headers = [
          { key: 'X-Tenant-ID', value: '1234' },
          { key: 'content-type', value: 'application/json' }
        ];
      }
    } else {
      headers = [{ key: 'Content-Type', value: 'application/json' }];
    }

    // Only VT scanURL is a true POST with form-urlencoded body
    const isVtScanPost = displayName === 'Virustotal' && method === 'POST' && entry.functionName === 'virustotal_scanURL';
    let body;
    if (isVtScanPost) {
      // Parse form-urlencoded string like "url=https://wicar.org"
      const urlEncoded = rawReqStr.split('&').map(pair => {
        const [key, ...rest] = pair.split('=');
        return { key: key, value: rest.join('='), type: 'text' };
      });
      body = { mode: 'urlencoded', urlencoded: urlEncoded };
    } else {
      body = { mode: 'raw', raw: rawReqStr, options: { raw: { language: 'json' } } };
    }

    const requestObj = {
      method: method,
      header: headers,
      body: body,
      url: buildUrlObject(endpointPath),
      description:
        `Function: ${entry.functionName}\n` +
        `Original API: ${apiUrl}\n` +
        `Method: ${method}\n\n` +
        `Send the sample request body to get the mock response.`
    };

    const item = {
      name: `${entry.sno}. ${entry.functionName}`,
      request: requestObj,
      response: [
        {
          name: 'Sample Response',
          originalRequest: {
            method: method,
            header: headers,
            body: body,
            url: buildUrlObject(endpointPath)
          },
          status: 'OK',
          code: 200,
          _postman_previewlanguage: 'json',
          header: [{ key: 'Content-Type', value: 'application/json' }],
          body: rawRespStr
        }
      ]
    };

    folder.item.push(item);
  }

  collection.item.push(folder);
}

const outPath = path.join(ROOT, 'Mock_Server_Collection.postman_collection.json');
fs.writeFileSync(outPath, JSON.stringify(collection, null, 2) + '\n');
console.log(`Postman collection written to ${outPath}`);
console.log(`Total items: ${collection.item.length} top-level (including ${collection.item.length - 2} service folders)`);
let total = 0;
for (const item of collection.item) {
  if (item.item) total += item.item.length;
}
console.log(`Total function requests: ${total}`);
