/**
 * Dynamic mock responses loader
 *
 * Reads extracted_data.json on every call so that edits are reflected
 * immediately in the UI without restarting the server.
 */

const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

// Mapping from extracted_data.json display names → internal service keys
const SERVICE_KEY_MAP = {
  'Virustotal': 'virustotal',
  'Okta': 'okta',
  'Bitdefender Cloud': 'bitdefender_cloud',
  'Sophos central': 'sophos_central',
  'Sentinelone': 'sentinelone',
  'Crowdstrike Falcon': 'crowdstrike_falcon',
  'Cisco Duo': 'cisco_duo'
};

const DATA_FILE = path.resolve(__dirname, '..', '..', 'extracted_data.json');

/**
 * Load and transform extracted_data.json into the format expected by routes.
 * Reads fresh from disk each time so edits are picked up instantly.
 */
function getMockData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const extracted = JSON.parse(raw);
    const mockResponses = {};

    for (const [displayName, entries] of Object.entries(extracted)) {
      const serviceKey = SERVICE_KEY_MAP[displayName] || displayName.toLowerCase().replace(/\s+/g, '_');
      mockResponses[serviceKey] = {};

      for (const entry of entries) {
        let sampleRequest = {};
        try { sampleRequest = JSON.parse(entry.request); } catch (_) { sampleRequest = entry.request; }

        let sampleResponse = {};
        try { sampleResponse = JSON.parse(entry.response); } catch (_) { sampleResponse = entry.response; }

        mockResponses[serviceKey][entry.functionName] = {
          functionName: entry.functionName,
          api: entry.api || '',
          sampleRequest,
          sampleResponse
        };
      }
    }

    return mockResponses;
  } catch (err) {
    logger.error('Failed to load extracted_data.json', { error: err.message });
    return {};
  }
}

module.exports = { getMockData };
