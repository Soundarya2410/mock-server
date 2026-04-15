'use strict';
const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const extractedDataPath = path.join(baseDir, 'extracted_data.json');
const postmanResponsesPath = path.join(baseDir, 'crowdstrike_success_responses.json');

// Read files
const extractedData = JSON.parse(fs.readFileSync(extractedDataPath, 'utf8'));
const postmanResponses = JSON.parse(fs.readFileSync(postmanResponsesPath, 'utf8'));

// Build a mapping from Postman items to their success response bodies
// Key: normalized URL path + method
// The API fields in extracted_data.json contain paths like:
//   https://{CLOUD_ENVIRONMENT}/fwmgr/queries/rule-groups/v1
// The Postman items have urlPath like:
//   fwmgr/queries/rule-groups/v1

// Also build a name-based mapping for additional matching
const nameToFunctionMap = {
  "Get Rule Groups": "crowdstrike_getRuleGroups",
  "Create Rule Group": "crowdstrike_createRuleGroup",
  "Update Rule Group": "crowdstrike_updateRuleGroup",
  "Get Rule Group Details": "crowdstrike_getRuleGroupDetails",
  "Update Prevention Policy": "crowdstrike_updateFirewallPolicy", // fwmgr/entities/policies/v2
  "Create Firewall Policy": "crowdstrike_createFirewallPolicy",
  "Perform Firewall Policy Action": "crowdstrike_performFirewallPolicyAction",
  "Perform Sensor Update Policy": "crowdstrike_performSensorUpdatePolicyAction",
  "Create Sensor Policy": "crowdstrike_createSensorPolicy",
  "Update Sensor Policy": "crowdstrike_updateSensorPolicy",
  "Query Combined Sensor Update Policies": "crowdstrike_queryCombinedSensorUpdatePolicies",
  "Isolate Endpoint": "crowdstrike_isolateEndpoint",
  "UnIsolate Endpoint": "crowdstrike_unisolateEndpoint",
  "Search Device": "crowdstrike_searchDevice",
  "Create Host Groups": "crowdstrike_createHostGroups",
  "Update Host Group": "crowdstrike_updateHostGroups",
  "Delete Host Group": "crowdstrike_deleteHostGroups",
  "Get Host Groups": "crowdstrike_getHostGroups",
  "Retrieve User ID": "crowdstrike_retrieveUserUuid",
  "Get User Role ID": "crowdstrike_getUserRoleId",
  "Retrieve user info": "crowdstrike_retrieveUserInfo",
  "Revoke": "crowdstrike_revokeUserRole",
  "Get Available Role id": "crowdstrike_getAvailableRoleId",
  "Reset Password": "crowdstrike_resetUserPassword",
  "Kill Process": "crowdstrike_killProcess",
  "List Network Stats": "crowdstrike_listNetworkStats",
  "List Processes": "crowdstrike_listProcesses",
  "Create Session": "crowdstrike_createSession",
  "Get Detection for Incident": "crowdstrike_getDetectionForIncident",
  "Get Quarantined Files": "crowdstrike_getQuarantinedFiles",
  "Apply Quarantine File Action": "crowdstrike_applyQuarantineFileAction",
  "Create ODS Scan": "crowdstrike_createODSScan",
  "Delete ODS Scheduled Scan": "crowdstrike_deleteODSScheduledScan",
  "Create ODS Scheduled Scan": "crowdstrike_createODSScheduledScan",
  "Query ODS Malicious Files": "crowdstrike_queryODSMaliciousFiles",
  "Query ODS Scan": "crowdstrike_queryODSScan",
  "Query ODS Scan Hosts": "crowdstrike_queryODSScanHosts",
  "Create ML Exclusions": "crowdstrike_createMLExclusion",
  "Update ML Exclusions": "crowdstrike_updateMLExclusion",
  "Delete ML Exclusions": "crowdstrike_deleteMLExclusion",
  "Search ML Exclusions": "crowdstrike_searchMLExclusions",
  "Create IOC": "crowdstrike_createIOC",
  "Retrieve Detection": "crowdstrike_retrieveDetection",
  "Update Detects": "crowdstrike_updateDetects",
  "Search Alerts": "crowdstrike_searchAlerts",
  "Update Prevention Policy": "crowdstrike_updatePreventionPolicy", // policy/entities/prevention/v1
};

// Since "Update Prevention Policy" appears twice (one for firewall update, one for prevention),
// we need to disambiguate by URL path
const pathAndMethodToFunction = {
  "fwmgr/entities/policies/v2|PUT": "crowdstrike_updateFirewallPolicy",
  "policy/entities/prevention/v1|PATCH": "crowdstrike_updatePreventionPolicy",
};

// Build function name -> postman response body mapping
const functionToResponse = {};

for (const item of postmanResponses) {
  const key = `${item.urlPath}|${item.method}`;
  
  // Check path+method specific mapping first
  if (pathAndMethodToFunction[key]) {
    functionToResponse[pathAndMethodToFunction[key]] = item.successResponseBody;
    continue;
  }
  
  // Use name-based mapping
  if (nameToFunctionMap[item.itemName]) {
    functionToResponse[nameToFunctionMap[item.itemName]] = item.successResponseBody;
  } else {
    console.log(`WARNING: No mapping for Postman item: "${item.itemName}" (${item.method} ${item.urlPath})`);
  }
}

console.log(`\nMapped ${Object.keys(functionToResponse).length} functions from Postman collection\n`);

// Now update extracted_data.json
const crowdstrikeSection = extractedData["Crowdstrike Falcon"];
if (!crowdstrikeSection) {
  console.error("ERROR: 'Crowdstrike Falcon' section not found in extracted_data.json");
  process.exit(1);
}

let updatedCount = 0;
let skippedCount = 0;
const skippedFunctions = [];

for (const entry of crowdstrikeSection) {
  const funcName = entry.functionName;
  if (functionToResponse[funcName]) {
    const responseBody = functionToResponse[funcName];
    // The response in extracted_data.json is stored as a JSON string
    // The successResponseBody from Postman is the parsed body content
    // We need to convert the Postman response body to the format used in extracted_data.json
    
    let newResponse;
    if (typeof responseBody === 'string') {
      // Try to parse and re-stringify for consistency
      try {
        const parsed = JSON.parse(responseBody);
        // The extracted_data.json stores responses in different formats:
        // Some are the full API response with meta/resources wrapper
        // Some are just the resources array
        // We need to extract just the relevant part based on current format
        
        // Check if the current response in extracted_data starts with [ (array) or { (object)
        const currentResponse = entry.response;
        
        if (parsed.resources !== undefined) {
          // The Postman response has the full API response wrapper
          // The extracted_data typically stores just the resources part
          if (currentResponse.startsWith('[')) {
            // Current response is an array - extract resources
            newResponse = JSON.stringify(parsed.resources);
          } else if (currentResponse.startsWith('{')) {
            // Current response is an object
            if (parsed.resources && typeof parsed.resources === 'object' && !Array.isArray(parsed.resources)) {
              newResponse = JSON.stringify(parsed.resources);
            } else if (parsed.resources === null || (Array.isArray(parsed.resources) && parsed.resources.length === 0)) {
              newResponse = JSON.stringify([]);
            } else {
              newResponse = JSON.stringify(parsed.resources);
            }
          } else {
            newResponse = JSON.stringify(parsed.resources);
          }
        } else {
          // No resources wrapper, use as-is
          newResponse = JSON.stringify(parsed);
        }
      } catch (e) {
        newResponse = responseBody;
      }
    } else if (typeof responseBody === 'object') {
      // It's already parsed
      if (responseBody.resources !== undefined) {
        const currentResponse = entry.response;
        if (currentResponse.startsWith('[') || currentResponse.startsWith('"')) {
          if (responseBody.resources === null) {
            newResponse = JSON.stringify([]);
          } else {
            newResponse = JSON.stringify(responseBody.resources);
          }
        } else {
          if (responseBody.resources === null) {
            newResponse = JSON.stringify([]);
          } else {
            newResponse = JSON.stringify(responseBody.resources);
          }
        }
      } else {
        newResponse = JSON.stringify(responseBody);
      }
    } else {
      newResponse = String(responseBody);
    }
    
    console.log(`✓ Updated: ${funcName}`);
    entry.response = newResponse;
    updatedCount++;
  } else {
    skippedFunctions.push(funcName);
    skippedCount++;
  }
}

console.log(`\nResults:`);
console.log(`  Updated: ${updatedCount}`);
console.log(`  Skipped (no Postman match): ${skippedCount}`);
if (skippedFunctions.length > 0) {
  console.log(`  Skipped functions: ${skippedFunctions.join(', ')}`);
}

// Write updated file
fs.writeFileSync(extractedDataPath, JSON.stringify(extractedData, null, 2), 'utf8');
console.log(`\nSuccessfully wrote updated extracted_data.json`);
