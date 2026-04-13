module.exports = {
  "virustotal": {
    "displayName": "Virustotal",
    "functionCount": 46,
    "functions": [
      {
        "sno": 1,
        "name": "virustotal_domainReputation",
        "safeName": "virustotal_domainReputation",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain"
        ]
      },
      {
        "sno": 2,
        "name": "virustotal_downloadedFilesFromDomain",
        "safeName": "virustotal_downloadedFilesFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 3,
        "name": "virustotal_downloadedFilesFromIP",
        "safeName": "virustotal_downloadedFilesFromIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 4,
        "name": "virustotal_downloadedFilesFromUrl",
        "safeName": "virustotal_downloadedFilesFromUrl",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url",
          "limit"
        ]
      },
      {
        "sno": 5,
        "name": "virustotal_fileReputation",
        "safeName": "virustotal_fileReputation",
        "api": "https://www.virustotal.com/api/v3/files/",
        "method": "GET",
        "params": [
          "fileHash"
        ]
      },
      {
        "sno": 6,
        "name": "virustotal_fileOrUrlAnalysis",
        "safeName": "virustotal_fileOrUrlAnalysis",
        "api": "https://www.virustotal.com/api/v3/analyses/",
        "method": "GET",
        "params": [
          "id"
        ]
      },
      {
        "sno": 7,
        "name": "virustotal_getFileReport",
        "safeName": "virustotal_getFileReport",
        "api": "https://www.virustotal.com/api/v3/files/",
        "method": "GET",
        "params": [
          "fileHash"
        ]
      },
      {
        "sno": 8,
        "name": "virustotal_getScreenshotDetails",
        "safeName": "virustotal_getScreenshotDetails",
        "api": "https://www.virustotal.com/api/v3/files/",
        "method": "GET",
        "params": [
          "fileHash",
          "limit"
        ]
      },
      {
        "sno": 9,
        "name": "virustotal_getVendorAnalysis",
        "safeName": "virustotal_getVendorAnalysis",
        "api": "Dynamic \u2014 /api/v3/ip_addresses/, /api/v3/domains/, or /api/v3/files/ based on indicatorType",
        "method": "DELETE",
        "params": [
          "indicatorType",
          "vendor",
          "indicatorValue"
        ]
      },
      {
        "sno": 10,
        "name": "virustotal_ipReputation",
        "safeName": "virustotal_ipReputation",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "overridePrivateLookup"
        ]
      },
      {
        "sno": 11,
        "name": "virustotal_listCAARecords",
        "safeName": "virustotal_listCAARecords",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 12,
        "name": "virustotal_listCName",
        "safeName": "virustotal_listCName",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 13,
        "name": "virustotal_listCollectionsFromURL",
        "safeName": "virustotal_listCollectionsFromURL",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url",
          "limit"
        ]
      },
      {
        "sno": 14,
        "name": "virustotal_listCollectionsForDomain",
        "safeName": "virustotal_listCollectionsForDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 15,
        "name": "virustotal_listCollectionsForIP",
        "safeName": "virustotal_listCollectionsForIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 16,
        "name": "virustotal_listCollectionsFromThreatActors",
        "safeName": "virustotal_listCollectionsFromThreatActors",
        "api": "https://www.virustotal.com/api/v3/collections/",
        "method": "GET",
        "params": [
          "id",
          "limit"
        ]
      },
      {
        "sno": 17,
        "name": "virustotal_listCommunicatingFilesFromDomain",
        "safeName": "virustotal_listCommunicatingFilesFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 18,
        "name": "virustotal_listCommunicatingFilesFromIP",
        "safeName": "virustotal_listCommunicatingFilesFromIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 19,
        "name": "virustotal_listCommunicatingFilesFromUrl",
        "safeName": "virustotal_listCommunicatingFilesFromUrl",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url",
          "limit"
        ]
      },
      {
        "sno": 20,
        "name": "virustotal_listContactedDomainFromUrl",
        "safeName": "virustotal_listContactedDomainFromUrl",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url",
          "limit"
        ]
      },
      {
        "sno": 21,
        "name": "virustotal_listContactedIPFromUrl",
        "safeName": "virustotal_listContactedIPFromUrl",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url",
          "limit"
        ]
      },
      {
        "sno": 22,
        "name": "virustotal_listHistoricalSSLCertificatesFromDomain",
        "safeName": "virustotal_listHistoricalSSLCertificatesFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 23,
        "name": "virustotal_listHistoricalSSLCertificatesFromIP",
        "safeName": "virustotal_listHistoricalSSLCertificatesFromIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 24,
        "name": "virustotal_listHistoricalWhoisForDomain",
        "safeName": "virustotal_listHistoricalWhoisForDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 25,
        "name": "virustotal_listHistoricalWhoisForIP",
        "safeName": "virustotal_listHistoricalWhoisForIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 26,
        "name": "virustotal_listLastServingIPsFromURL",
        "safeName": "virustotal_listLastServingIPsFromURL",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url"
        ]
      },
      {
        "sno": 27,
        "name": "virustotal_listMxRecordsForDomain",
        "safeName": "virustotal_listMxRecordsForDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 28,
        "name": "virustotal_listNetworkLocation",
        "safeName": "virustotal_listNetworkLocation",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url"
        ]
      },
      {
        "sno": 29,
        "name": "virustotal_listNSRecords",
        "safeName": "virustotal_listNSRecords",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 30,
        "name": "virustotal_listParentDomain",
        "safeName": "virustotal_listParentDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain"
        ]
      },
      {
        "sno": 31,
        "name": "virustotal_listRedirectingUrlsTo",
        "safeName": "virustotal_listRedirectingUrlsTo",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "GET",
        "params": [
          "url",
          "limit"
        ]
      },
      {
        "sno": 32,
        "name": "virustotal_listReferrerFilesFromDomain",
        "safeName": "virustotal_listReferrerFilesFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 33,
        "name": "virustotal_listReferrerFilesFromIP",
        "safeName": "virustotal_listReferrerFilesFromIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 34,
        "name": "virustotal_listRelatedDomainsFromThreatActors",
        "safeName": "virustotal_listRelatedDomainsFromThreatActors",
        "api": "https://www.virustotal.com/api/v3/collections/",
        "method": "GET",
        "params": [
          "id",
          "limit"
        ]
      },
      {
        "sno": 35,
        "name": "virustotal_listRelatedFilesFromThreatActors",
        "safeName": "virustotal_listRelatedFilesFromThreatActors",
        "api": "https://www.virustotal.com/api/v3/collections/",
        "method": "GET",
        "params": [
          "id",
          "limit"
        ]
      },
      {
        "sno": 36,
        "name": "virustotal_listRelatedIPAddressesFromThreatActors",
        "safeName": "virustotal_listRelatedIPAddressesFromThreatActors",
        "api": "https://www.virustotal.com/api/v3/collections/",
        "method": "POST",
        "params": [
          "id",
          "limit"
        ]
      },
      {
        "sno": 37,
        "name": "virustotal_listRelatedUrls",
        "safeName": "virustotal_listRelatedUrls",
        "api": "https://www.virustotal.com/api/v3/collections/",
        "method": "GET",
        "params": [
          "id",
          "limit"
        ]
      },
      {
        "sno": 38,
        "name": "virustotal_listResolutionFromDomain",
        "safeName": "virustotal_listResolutionFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 39,
        "name": "virustotal_listResolutionFromIP",
        "safeName": "virustotal_listResolutionFromIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 40,
        "name": "virustotal_listSiblingsFromDomain",
        "safeName": "virustotal_listSiblingsFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 41,
        "name": "virustotal_listSoaRecordsForDomain",
        "safeName": "virustotal_listSoaRecordsForDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 42,
        "name": "virustotal_listUrlsFromDomain",
        "safeName": "virustotal_listUrlsFromDomain",
        "api": "https://www.virustotal.com/api/v3/domains/",
        "method": "GET",
        "params": [
          "domain",
          "limit"
        ]
      },
      {
        "sno": 43,
        "name": "virustotal_listUrlsFromIP",
        "safeName": "virustotal_listUrlsFromIP",
        "api": "https://www.virustotal.com/api/v3/ip_addresses/",
        "method": "GET",
        "params": [
          "ip",
          "limit"
        ]
      },
      {
        "sno": 44,
        "name": "virustotal_scanURL",
        "safeName": "virustotal_scanURL",
        "api": "https://www.virustotal.com/api/v3/urls",
        "method": "POST",
        "params": [
          "url"
        ]
      },
      {
        "sno": 45,
        "name": "virustotal_urlReputation",
        "safeName": "virustotal_urlReputation",
        "api": "https://www.virustotal.com/api/v3/urls/",
        "method": "GET",
        "params": [
          "url"
        ]
      },
      {
        "sno": 46,
        "name": "virustotal_calculateRiskScore",
        "safeName": "virustotal_calculateRiskScore",
        "api": "No API",
        "method": "GET",
        "params": [
          "VTResponse",
          "maliciousThreshold",
          "suspiciousThreshold",
          "trustedVendorsList",
          "trustedVendorsThreshold",
          "crowdsourcedYaraRulesThreshold",
          "sigmaIDSThreshold",
          "domainPopularityRanking"
        ]
      }
    ]
  },
  "okta": {
    "displayName": "Okta",
    "functionCount": 32,
    "functions": [
      {
        "sno": 1,
        "name": "okta_getUser",
        "safeName": "okta_getUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}",
        "method": "GET",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 2,
        "name": "okta_createUser",
        "safeName": "okta_createUser",
        "api": "https://{DOMAINNAME}/api/v1/users",
        "method": "POST",
        "params": [
          "userEmail",
          "firstName",
          "lastName"
        ]
      },
      {
        "sno": 3,
        "name": "okta_updateUser",
        "safeName": "okta_updateUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}",
        "method": "PUT",
        "params": [
          "userLogin",
          "profile"
        ]
      },
      {
        "sno": 4,
        "name": "okta_deactivateUser",
        "safeName": "okta_deactivateUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/deactivate",
        "method": "POST",
        "params": [
          "userLogin",
          "sendEmail"
        ]
      },
      {
        "sno": 5,
        "name": "okta_activateUser",
        "safeName": "okta_activateUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/activate",
        "method": "POST",
        "params": [
          "userLogin",
          "sendEmail"
        ]
      },
      {
        "sno": 6,
        "name": "okta_addToGroup",
        "safeName": "okta_addToGroup",
        "api": "https://{DOMAINNAME}/api/v1/groups/{groupId}/users/{userLogin}",
        "method": "POST",
        "params": [
          "userLogin",
          "groupId"
        ]
      },
      {
        "sno": 7,
        "name": "okta_removeFromGroup",
        "safeName": "okta_removeFromGroup",
        "api": "https://{DOMAINNAME}/api/v1/groups/{groupId}/users/{userLogin}",
        "method": "PUT",
        "params": [
          "userLogin",
          "groupId"
        ]
      },
      {
        "sno": 8,
        "name": "okta_createGroup",
        "safeName": "okta_createGroup",
        "api": "https://{DOMAINNAME}/api/v1/groups",
        "method": "POST",
        "params": [
          "groupName",
          "groupDescription"
        ]
      },
      {
        "sno": 9,
        "name": "okta_suspendAUser",
        "safeName": "okta_suspendAUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/suspend",
        "method": "DELETE",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 10,
        "name": "okta_unlockUser",
        "safeName": "okta_unlockUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/unlock",
        "method": "POST",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 11,
        "name": "okta_unsuspendUser",
        "safeName": "okta_unsuspendUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/unsuspend",
        "method": "PUT",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 12,
        "name": "okta_deleteUser",
        "safeName": "okta_deleteUser",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}",
        "method": "DELETE",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 13,
        "name": "okta_listUsers",
        "safeName": "okta_listUsers",
        "api": "https://{DOMAINNAME}/api/v1/users",
        "method": "GET",
        "params": [
          "filter",
          "search",
          "limit",
          "query",
          "after"
        ]
      },
      {
        "sno": 14,
        "name": "okta_getZone",
        "safeName": "okta_getZone",
        "api": "https://{DOMAINNAME}/api/v1/zones/{zoneId}",
        "method": "GET",
        "params": [
          "zoneId"
        ]
      },
      {
        "sno": 15,
        "name": "okta_listGroupMembers",
        "safeName": "okta_listGroupMembers",
        "api": "https://{DOMAINNAME}/api/v1/groups/{groupId}/users",
        "method": "GET",
        "params": [
          "groupId",
          "limit",
          "after"
        ]
      },
      {
        "sno": 16,
        "name": "okta_listUsersApps",
        "safeName": "okta_listUsersApps",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/appLinks",
        "method": "GET",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 17,
        "name": "okta_listApplication",
        "safeName": "okta_listApplication",
        "api": "https://{DOMAINNAME}/api/v1/apps",
        "method": "GET",
        "params": [
          "query",
          "limit",
          "after"
        ]
      },
      {
        "sno": 18,
        "name": "okta_verifyPushFactor",
        "safeName": "okta_verifyPushFactor",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/factors/{factorId}/verify",
        "method": "GET",
        "params": [
          "factorId",
          "userLogin",
          "passCode",
          "useNumberMatchingChallenge",
          "answer",
          "authenticatorData",
          "clientData",
          "signatureData"
        ]
      },
      {
        "sno": 19,
        "name": "okta_setPassword",
        "safeName": "okta_setPassword",
        "api": "https://{DOMAINNAME}/idp/myaccount/password",
        "method": "PUT",
        "params": [
          "newPassword"
        ]
      },
      {
        "sno": 20,
        "name": "okta_listFactor",
        "safeName": "okta_listFactor",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/factors",
        "method": "GET",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 21,
        "name": "okta_endUserSession",
        "safeName": "okta_endUserSession",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/sessions",
        "method": "DELETE",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 22,
        "name": "okta_expirePassword",
        "safeName": "okta_expirePassword",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/expire_password",
        "method": "DELETE",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 23,
        "name": "okta_resetPassword",
        "safeName": "okta_resetPassword",
        "api": "https://{DOMAINNAME}/api/v1/users/{userLogin}/lifecycle/reset_password?sendEmail=true",
        "method": "PUT",
        "params": [
          "userLogin"
        ]
      },
      {
        "sno": 24,
        "name": "okta_listNetworkZone",
        "safeName": "okta_listNetworkZone",
        "api": "https://{DOMAINNAME}/api/v1/zones",
        "method": "GET",
        "params": [
          "limit",
          "after"
        ]
      },
      {
        "sno": 25,
        "name": "okta_updateNetworkZone",
        "safeName": "okta_updateNetworkZone",
        "api": "https://{DOMAINNAME}/api/v1/zones/{zoneId}",
        "method": "PUT",
        "params": [
          "zoneId",
          "zoneName",
          "updateType",
          "bodyData"
        ]
      },
      {
        "sno": 26,
        "name": "okta_createNetworkZone",
        "safeName": "okta_createNetworkZone",
        "api": "https://{DOMAINNAME}/api/v1/zones",
        "method": "POST",
        "params": [
          "name",
          "type",
          "bodyData"
        ]
      },
      {
        "sno": 27,
        "name": "okta_triggerSelfServiceUnlock",
        "safeName": "okta_triggerSelfServiceUnlock",
        "api": "https://{DOMAINNAME}/api/v1/authn/recovery/unlock",
        "method": "POST",
        "params": [
          "factorType",
          "username"
        ]
      },
      {
        "sno": 28,
        "name": "okta_createPolicyRule",
        "safeName": "okta_createPolicyRule",
        "api": "https://{DOMAINNAME}/api/v1/policies/{policyId}/rules",
        "method": "POST",
        "params": [
          "policyId",
          "name",
          "priority",
          "status",
          "system",
          "type",
          "actions",
          "conditions"
        ]
      },
      {
        "sno": 29,
        "name": "okta_getUserRole",
        "safeName": "okta_getUserRole",
        "api": "https://{DOMAINNAME}/api/v1/users/{userId}/roles",
        "method": "GET",
        "params": [
          "userId"
        ]
      },
      {
        "sno": 30,
        "name": "okta_createPolicy",
        "safeName": "okta_createPolicy",
        "api": "https://{DOMAINNAME}/api/v1/policies",
        "method": "POST",
        "params": [
          "name",
          "type",
          "description",
          "priority",
          "status",
          "system",
          "conditions"
        ]
      },
      {
        "sno": 31,
        "name": "okta_unenrollFactor",
        "safeName": "okta_unenrollFactor",
        "api": "https://{DOMAINNAME}/api/v1/users/{userId}/factors/{factorId}",
        "method": "POST",
        "params": [
          "userId",
          "factorId"
        ]
      },
      {
        "sno": 32,
        "name": "okta_listGroup",
        "safeName": "okta_listGroup",
        "api": "https://{DOMAINNAME}/api/v1/groups",
        "method": "GET",
        "params": [
          "search",
          "limit",
          "after"
        ]
      }
    ]
  },
  "bitdefender_cloud": {
    "displayName": "Bitdefender Cloud",
    "functionCount": 31,
    "functions": [
      {
        "sno": 1,
        "name": "bitdefender_getCustomRuleList",
        "safeName": "bitdefender_getCustomRuleList",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/incidents",
        "method": "DELETE",
        "params": [
          "page",
          "perPage",
          "companyId",
          "type"
        ]
      },
      {
        "sno": 2,
        "name": "bitdefender_getEndpointList",
        "safeName": "bitdefender_getEndpointList",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "apiHostName",
          "parentId",
          "page",
          "perPage",
          "isManaged",
          "filters",
          "options"
        ]
      },
      {
        "sno": 3,
        "name": "bitdefender_getNetworkInventoryItems",
        "safeName": "bitdefender_getNetworkInventoryItems",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "apiHostName",
          "parentId",
          "page",
          "perPage",
          "filters",
          "options"
        ]
      },
      {
        "sno": 4,
        "name": "bitdefender_getQuarantineItemsList",
        "safeName": "bitdefender_getQuarantineItemsList",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/quarantine",
        "method": "DELETE",
        "params": [
          "endpointId",
          "page",
          "perPage",
          "filters",
          "service"
        ]
      },
      {
        "sno": 5,
        "name": "bitdefender_getScanTasksList",
        "safeName": "bitdefender_getScanTasksList",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "POST",
        "params": [
          "name",
          "status",
          "page",
          "perPage"
        ]
      },
      {
        "sno": 6,
        "name": "bitdefender_getTaskStatus",
        "safeName": "bitdefender_getTaskStatus",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "taskId",
          "returnSubtasks",
          "page",
          "perPage",
          "status",
          "endedAfter",
          "endedBefore"
        ]
      },
      {
        "sno": 7,
        "name": "bitdefender_createScanTask",
        "safeName": "bitdefender_createScanTask",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "POST",
        "params": [
          "targetIds",
          "name",
          "customScanSettings",
          "type",
          "returnAllTaskIds"
        ]
      },
      {
        "sno": 8,
        "name": "bitdefender_createCustomGroup",
        "safeName": "bitdefender_createCustomGroup",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "POST",
        "params": [
          "groupName",
          "parentId"
        ]
      },
      {
        "sno": 9,
        "name": "bitdefender_addToBlocklist",
        "safeName": "bitdefender_addToBlocklist",
        "api": "https://{DOMAIN}/api/v1.2/jsonrpc/incidents",
        "method": "POST",
        "params": [
          "companyId",
          "type",
          "rules",
          "recursive"
        ]
      },
      {
        "sno": 10,
        "name": "bitdefender_addFileToQuarantineTask",
        "safeName": "bitdefender_addFileToQuarantineTask",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/quarantine",
        "method": "POST",
        "params": [
          "endpointIds",
          "filePath"
        ]
      },
      {
        "sno": 11,
        "name": "bitdefender_assignPolicy",
        "safeName": "bitdefender_assignPolicy",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "POST",
        "params": [
          "targetIds",
          "inheritFromAbove",
          "policyId",
          "forcePolicyInheritance"
        ]
      },
      {
        "sno": 12,
        "name": "bitdefender_changeIncidentStatus",
        "safeName": "bitdefender_changeIncidentStatus",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/incidents",
        "method": "PUT",
        "params": [
          "incidentId",
          "type",
          "status"
        ]
      },
      {
        "sno": 13,
        "name": "bitdefender_createCustomRule",
        "safeName": "bitdefender_createCustomRule",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/incidents",
        "method": "POST",
        "params": [
          "type",
          "name",
          "description",
          "tags",
          "settings",
          "returnRuleId"
        ]
      },
      {
        "sno": 14,
        "name": "bitdefender_createIsolateEndpoint",
        "safeName": "bitdefender_createIsolateEndpoint",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/incidents",
        "method": "POST",
        "params": [
          "endpointId"
        ]
      },
      {
        "sno": 15,
        "name": "bitdefender_createRestoreEndpointFromIsolationTask",
        "safeName": "bitdefender_createRestoreEndpointFromIsolationTask",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/incidents",
        "method": "POST",
        "params": [
          "endpointId"
        ]
      },
      {
        "sno": 16,
        "name": "bitdefender_createSubmitToSandboxAnalyzerTask",
        "safeName": "bitdefender_createSubmitToSandboxAnalyzerTask",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "POST",
        "params": [
          "targetId",
          "samplePaths",
          "commandLines",
          "taskName"
        ]
      },
      {
        "sno": 17,
        "name": "bitdefender_deleteCustomGroup",
        "safeName": "bitdefender_deleteCustomGroup",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "groupId",
          "force"
        ]
      },
      {
        "sno": 18,
        "name": "bitdefender_deleteCustomRule",
        "safeName": "bitdefender_deleteCustomRule",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/incidents",
        "method": "DELETE",
        "params": [
          "type",
          "ruleId"
        ]
      },
      {
        "sno": 19,
        "name": "bitdefender_deleteEndpoint",
        "safeName": "bitdefender_deleteEndpoint",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "endpointId"
        ]
      },
      {
        "sno": 20,
        "name": "bitdefender_deleteTask",
        "safeName": "bitdefender_deleteTask",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "taskId"
        ]
      },
      {
        "sno": 21,
        "name": "bitdefender_killProcess",
        "safeName": "bitdefender_killProcess",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "DELETE",
        "params": [
          "processId",
          "path",
          "endpointId",
          "incidentId"
        ]
      },
      {
        "sno": 22,
        "name": "bitdefender_getBlockListItems",
        "safeName": "bitdefender_getBlockListItems",
        "api": "https://{DOMAIN}/api/v1.2/jsonrpc/incidents",
        "method": "DELETE",
        "params": [
          "page",
          "perPage"
        ]
      },
      {
        "sno": 23,
        "name": "bitdefender_moveCustomGroup",
        "safeName": "bitdefender_moveCustomGroup",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "PUT",
        "params": [
          "groupId",
          "parentId"
        ]
      },
      {
        "sno": 24,
        "name": "bitdefender_moveEndpoints",
        "safeName": "bitdefender_moveEndpoints",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "PUT",
        "params": [
          "endpointIds",
          "groupId"
        ]
      },
      {
        "sno": 25,
        "name": "bitdefender_releaseQuarantineExchangeItem",
        "safeName": "bitdefender_releaseQuarantineExchangeItem",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/quarantine/exchange",
        "method": "PUT",
        "params": [
          "quarantineItemsIds"
        ]
      },
      {
        "sno": 26,
        "name": "bitdefender_updateIncidentNote",
        "safeName": "bitdefender_updateIncidentNote",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/incidents",
        "method": "PUT",
        "params": [
          "incidentId",
          "type",
          "note"
        ]
      },
      {
        "sno": 27,
        "name": "bitdefender_setEndpointLabel",
        "safeName": "bitdefender_setEndpointLabel",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "PUT",
        "params": [
          "endpointId",
          "label"
        ]
      },
      {
        "sno": 28,
        "name": "bitdefender_restoreQuarantineItemTask",
        "safeName": "bitdefender_restoreQuarantineItemTask",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/quarantine/computers",
        "method": "PUT",
        "params": [
          "quarantineItemsIds",
          "locationToRestore",
          "addExclusionInPolicy"
        ]
      },
      {
        "sno": 29,
        "name": "bitdefender_removeQuarantineItemTask",
        "safeName": "bitdefender_removeQuarantineItemTask",
        "api": "https://{DOMAIN}/api/v1.1/jsonrpc/quarantine/computers",
        "method": "PUT",
        "params": [
          "quarantineItemsIds",
          "service"
        ]
      },
      {
        "sno": 30,
        "name": "bitdefender_createScanTaskByMac",
        "safeName": "bitdefender_createScanTaskByMac",
        "api": "https://{DOMAIN}/api/v1.0/jsonrpc/network",
        "method": "POST",
        "params": [
          "macAddresses",
          "type",
          "name",
          "customScanSettings",
          "returnTaskId"
        ]
      },
      {
        "sno": 31,
        "name": "bitdefender_removeFromBlocklist",
        "safeName": "bitdefender_removeFromBlocklist",
        "api": "https://{DOMAIN}/api/v1.2/jsonrpc/incidents",
        "method": "PUT",
        "params": [
          "ids"
        ]
      }
    ]
  },
  "sophos_central": {
    "displayName": "Sophos central",
    "functionCount": 50,
    "functions": [
      {
        "sno": 1,
        "name": "sophoscentral_listAlerts",
        "safeName": "sophoscentral_listAlerts",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/alerts",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "pageFromKey"
        ]
      },
      {
        "sno": 2,
        "name": "sophoscentral_getAlert",
        "safeName": "sophoscentral_getAlert",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/alerts/{alertId}",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "alertId"
        ]
      },
      {
        "sno": 3,
        "name": "sophoscentral_alertAction",
        "safeName": "sophoscentral_alertAction",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/alerts/{alertId}/actions",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "alertId",
          "action",
          "message"
        ]
      },
      {
        "sno": 4,
        "name": "sophoscentral_searchAlert",
        "safeName": "sophoscentral_searchAlert",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/alerts/search",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "pageFromKey",
          "bodyParams"
        ]
      },
      {
        "sno": 5,
        "name": "sophoscentral_listEndpoint",
        "safeName": "sophoscentral_listEndpoint",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "pageFromKey",
          "queryParams"
        ]
      },
      {
        "sno": 6,
        "name": "sophoscentral_scanEndpoint",
        "safeName": "sophoscentral_scanEndpoint",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/{endpointId}/scans",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId"
        ]
      },
      {
        "sno": 7,
        "name": "sophoscentral_getTamperProtectionInfo",
        "safeName": "sophoscentral_getTamperProtectionInfo",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/{endpointId}/tamper-protection",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId",
          "getPassword"
        ]
      },
      {
        "sno": 8,
        "name": "sophoscentral_updateTamperProtectionInfo",
        "safeName": "sophoscentral_updateTamperProtectionInfo",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/{endpointId}/tamper-protection",
        "method": "PUT",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId",
          "enabled",
          "regeneratePassword"
        ]
      },
      {
        "sno": 9,
        "name": "sophoscentral_listWhitelistItems",
        "safeName": "sophoscentral_listWhitelistItems",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/allowed-items",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "page"
        ]
      },
      {
        "sno": 10,
        "name": "sophoscentral_getWhitelistItem",
        "safeName": "sophoscentral_getWhitelistItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/allowed-items/{allowedItemId}",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "allowedItemId"
        ]
      },
      {
        "sno": 11,
        "name": "sophoscentral_addWhitelistItem",
        "safeName": "sophoscentral_addWhitelistItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/allowed-items",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "itemType",
          "comment",
          "path",
          "fileName",
          "sha256",
          "certificateSigner"
        ]
      },
      {
        "sno": 12,
        "name": "sophoscentral_updateWhitelistItem",
        "safeName": "sophoscentral_updateWhitelistItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/allowed-items/{allowedItemId}",
        "method": "PUT",
        "params": [
          "dataRegion",
          "tenantId",
          "itemId",
          "comment"
        ]
      },
      {
        "sno": 13,
        "name": "sophoscentral_deleteWhitelistItem",
        "safeName": "sophoscentral_deleteWhitelistItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/allowed-items/{allowedItemId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "itemId"
        ]
      },
      {
        "sno": 14,
        "name": "sophoscentral_getBlockedAddress",
        "safeName": "sophoscentral_getBlockedAddress",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/blocked-addresses",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "page"
        ]
      },
      {
        "sno": 15,
        "name": "sophoscentral_listBlockedItems",
        "safeName": "sophoscentral_listBlockedItems",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/blocked-items",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "page"
        ]
      },
      {
        "sno": 16,
        "name": "sophoscentral_getBlockedItem",
        "safeName": "sophoscentral_getBlockedItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/blocked-items/{blockedItemId}",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "blockedItemId"
        ]
      },
      {
        "sno": 17,
        "name": "sophoscentral_addBlockedItem",
        "safeName": "sophoscentral_addBlockedItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/blocked-items",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "type",
          "comment",
          "fileName",
          "sha256",
          "certificateSigner",
          "path"
        ]
      },
      {
        "sno": 18,
        "name": "sophoscentral_deleteBlockedItem",
        "safeName": "sophoscentral_deleteBlockedItem",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/blocked-items/{blockedItemId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "blockedItemId"
        ]
      },
      {
        "sno": 19,
        "name": "sophoscentral_listScanExclusion",
        "safeName": "sophoscentral_listScanExclusion",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exclusions/scanning",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "page",
          "exclusionType"
        ]
      },
      {
        "sno": 20,
        "name": "sophoscentral_getScanExclusion",
        "safeName": "sophoscentral_getScanExclusion",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exclusions/scanning/{exclusionId}",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "id"
        ]
      },
      {
        "sno": 21,
        "name": "sophoscentral_addScanExclusion",
        "safeName": "sophoscentral_addScanExclusion",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exclusions/scanning",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "comment",
          "scanMode",
          "exclusionType",
          "exclusionValue"
        ]
      },
      {
        "sno": 22,
        "name": "sophoscentral_updateScanExclusion",
        "safeName": "sophoscentral_updateScanExclusion",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exclusions/scanning/{exclusionId}",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "id",
          "comment",
          "scanMode",
          "exclusionValue"
        ]
      },
      {
        "sno": 23,
        "name": "sophoscentral_deleteScanExclusion",
        "safeName": "sophoscentral_deleteScanExclusion",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exclusions/scanning/{exclusionId}",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "id"
        ]
      },
      {
        "sno": 24,
        "name": "sophoscentral_listExploitMitigation",
        "safeName": "sophoscentral_listExploitMitigation",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exploit-mitigation/applications",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "page",
          "modified",
          "thumbprintNotIn"
        ]
      },
      {
        "sno": 25,
        "name": "sophoscentral_getExploitMitigation",
        "safeName": "sophoscentral_getExploitMitigation",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exploit-mitigation/applications/{mitigationId}",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "mitigationId"
        ]
      },
      {
        "sno": 26,
        "name": "sophoscentral_addExploitMitigation",
        "safeName": "sophoscentral_addExploitMitigation",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exploit-mitigation/applications",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "path"
        ]
      },
      {
        "sno": 27,
        "name": "sophoscentral_updateExploitMitigation",
        "safeName": "sophoscentral_updateExploitMitigation",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exploit-mitigation/applications/{mitigationId}",
        "method": "PUT",
        "params": [
          "dataRegion",
          "tenantId",
          "id",
          "path"
        ]
      },
      {
        "sno": 28,
        "name": "sophoscentral_deleteExploitMitigation",
        "safeName": "sophoscentral_deleteExploitMitigation",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/settings/exploit-mitigation/applications/{mitigationId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "id"
        ]
      },
      {
        "sno": 29,
        "name": "sophoscentral_getIsolationEndpoint",
        "safeName": "sophoscentral_getIsolationEndpoint",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/{endpointId}/isolation",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId"
        ]
      },
      {
        "sno": 30,
        "name": "sophoscentral_addIsolationEndpoint",
        "safeName": "sophoscentral_addIsolationEndpoint",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/isolation",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId",
          "comment",
          "enabled"
        ]
      },
      {
        "sno": 31,
        "name": "sophoscentral_updateIsolationEndpoint",
        "safeName": "sophoscentral_updateIsolationEndpoint",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/{endpointId}/isolation",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId",
          "comment",
          "enabled"
        ]
      },
      {
        "sno": 32,
        "name": "sophoscentral_deleteIsolationEndpoint",
        "safeName": "sophoscentral_deleteIsolationEndpoint",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoints/{endpointId}/isolation",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "endpointId",
          "comment",
          "enabled"
        ]
      },
      {
        "sno": 33,
        "name": "sophoscentral_addUserInUserGroup",
        "safeName": "sophoscentral_addUserInUserGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups/{groupId}/users",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId",
          "ids"
        ]
      },
      {
        "sno": 34,
        "name": "sophoscentral_deleteUserInUsergroup",
        "safeName": "sophoscentral_deleteUserInUsergroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups/{groupId}/users",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId",
          "ids"
        ]
      },
      {
        "sno": 35,
        "name": "sophoscentral_listUserGroup",
        "safeName": "sophoscentral_listUserGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "page",
          "pageSize",
          "search"
        ]
      },
      {
        "sno": 36,
        "name": "sophoscentral_getUserGroup",
        "safeName": "sophoscentral_getUserGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups/{groupId}",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId"
        ]
      },
      {
        "sno": 37,
        "name": "sophoscentral_createUsergroup",
        "safeName": "sophoscentral_createUsergroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "name",
          "description",
          "userIds"
        ]
      },
      {
        "sno": 38,
        "name": "sophoscentral_updateUsergroup",
        "safeName": "sophoscentral_updateUsergroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups/{groupId}",
        "method": "PUT",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId",
          "name",
          "description"
        ]
      },
      {
        "sno": 39,
        "name": "sophoscentral_deleteUsergroup",
        "safeName": "sophoscentral_deleteUsergroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/user-groups/{groupId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId"
        ]
      },
      {
        "sno": 40,
        "name": "sophoscentral_listUser",
        "safeName": "sophoscentral_listUser",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/users",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "page",
          "pageSize",
          "search"
        ]
      },
      {
        "sno": 41,
        "name": "sophoscentral_getUser",
        "safeName": "sophoscentral_getUser",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/users/{userId}",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "userId"
        ]
      },
      {
        "sno": 42,
        "name": "sophoscentral_addUser",
        "safeName": "sophoscentral_addUser",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/users",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "name",
          "firstName",
          "lastName",
          "exchangeLogin",
          "email",
          "groupIds"
        ]
      },
      {
        "sno": 43,
        "name": "sophoscentral_updateUser",
        "safeName": "sophoscentral_updateUser",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/users/{userId}",
        "method": "PUT",
        "params": [
          "dataRegion",
          "tenantId",
          "userId",
          "name",
          "firstName",
          "lastName",
          "exchangeLogin",
          "email"
        ]
      },
      {
        "sno": 44,
        "name": "sophoscentral_deleteUser",
        "safeName": "sophoscentral_deleteUser",
        "api": "https://api-{DATA_REGION}.central.sophos.com/common/v1/directory/users/{userId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "userId"
        ]
      },
      {
        "sno": 45,
        "name": "sophoscentral_listEndpointGroup",
        "safeName": "sophoscentral_listEndpointGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoint-groups",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "page",
          "pageSize",
          "search"
        ]
      },
      {
        "sno": 46,
        "name": "sophoscentral_getEndpointGroup",
        "safeName": "sophoscentral_getEndpointGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoint-groups/{groupId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId"
        ]
      },
      {
        "sno": 47,
        "name": "sophoscentral_createEndpointGroup",
        "safeName": "sophoscentral_createEndpointGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoint-groups",
        "method": "POST",
        "params": [
          "dataRegion",
          "tenantId",
          "name",
          "description",
          "type",
          "endpointIds"
        ]
      },
      {
        "sno": 48,
        "name": "sophoscentral_updateEndpointGroup",
        "safeName": "sophoscentral_updateEndpointGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoint-groups/{groupId}",
        "method": "PUT",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId",
          "name",
          "description"
        ]
      },
      {
        "sno": 49,
        "name": "sophoscentral_deleteEndpointGroup",
        "safeName": "sophoscentral_deleteEndpointGroup",
        "api": "https://api-{DATA_REGION}.central.sophos.com/endpoint/v1/endpoint-groups/{groupId}",
        "method": "DELETE",
        "params": [
          "dataRegion",
          "tenantId",
          "groupId"
        ]
      },
      {
        "sno": 50,
        "name": "sophoscentral_getEvents",
        "safeName": "sophoscentral_getEvents",
        "api": "https://api-{DATA_REGION}.central.sophos.com/siem/v1/events",
        "method": "GET",
        "params": [
          "dataRegion",
          "tenantId",
          "pageSize",
          "page",
          "cursor"
        ]
      }
    ]
  },
  "sentinelone": {
    "displayName": "Sentinelone",
    "functionCount": 46,
    "functions": [
      {
        "sno": 1,
        "name": "sentinelone_broadCastMessage",
        "safeName": "sentinelone_broadCastMessage",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents/actions/broadcast",
        "method": "POST",
        "params": [
          "message",
          "filterMap"
        ]
      },
      {
        "sno": 2,
        "name": "sentinelone_connectAgent",
        "safeName": "sentinelone_connectAgent",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents/actions/connect",
        "method": "GET",
        "params": [
          "agentIds",
          "filterMap"
        ]
      },
      {
        "sno": 3,
        "name": "sentinelone_createDetectionrule",
        "safeName": "sentinelone_createDetectionrule",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/rules",
        "method": "POST",
        "params": [
          "name",
          "description",
          "expirationMode",
          "severity",
          "queryType",
          "status",
          "query",
          "queryLang",
          "entity",
          "matchInOrder",
          "matchesRequired",
          "subQuery",
          "windowMinutes",
          "filterMap"
        ]
      },
      {
        "sno": 4,
        "name": "sentinelone_createIOC",
        "safeName": "sentinelone_createIOC",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threat-intelligence/iocs",
        "method": "POST",
        "params": [
          "accountIds",
          "source",
          "type",
          "value",
          "method",
          "name",
          "validUntil",
          "description",
          "filterMap"
        ]
      },
      {
        "sno": 5,
        "name": "sentinelone_createPowerQuery",
        "safeName": "sentinelone_createPowerQuery",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/dv/events/pq",
        "method": "POST",
        "params": [
          "fromDate",
          "toDate",
          "query",
          "filterMap"
        ]
      },
      {
        "sno": 6,
        "name": "sentinelone_createQuery",
        "safeName": "sentinelone_createQuery",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/dv/init-query",
        "method": "POST",
        "params": [
          "fromDate",
          "toDate",
          "query",
          "filterMap"
        ]
      },
      {
        "sno": 7,
        "name": "sentinelone_createWhiteListItem",
        "safeName": "sentinelone_createWhiteListItem",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/exclusions",
        "method": "POST",
        "params": [
          "exclusionType",
          "exclusionValue",
          "osType",
          "description",
          "exclusionMode",
          "filterMap"
        ]
      },
      {
        "sno": 8,
        "name": "sentinelone_deleteDetectionRule",
        "safeName": "sentinelone_deleteDetectionRule",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/rules",
        "method": "DELETE",
        "params": [
          "ruleIds",
          "filterMap"
        ]
      },
      {
        "sno": 9,
        "name": "sentinelone_deleteGroup",
        "safeName": "sentinelone_deleteGroup",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/groups/{groupId}",
        "method": "DELETE",
        "params": [
          "groupId"
        ]
      },
      {
        "sno": 10,
        "name": "sentinelone_deleteIOC",
        "safeName": "sentinelone_deleteIOC",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threat-intelligence/iocs",
        "method": "DELETE",
        "params": [
          "accountIds",
          "uuids",
          "filterMap"
        ]
      },
      {
        "sno": 11,
        "name": "sentinelone_disableDetectionRules",
        "safeName": "sentinelone_disableDetectionRules",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/rules/disable",
        "method": "GET",
        "params": [
          "ruleIds",
          "filterMap"
        ]
      },
      {
        "sno": 12,
        "name": "sentinelone_disconnectAgent",
        "safeName": "sentinelone_disconnectAgent",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents/actions/disconnect",
        "method": "GET",
        "params": [
          "agentIds",
          "filterMap"
        ]
      },
      {
        "sno": 13,
        "name": "sentinelone_enableDetectionRules",
        "safeName": "sentinelone_enableDetectionRules",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/rules/enable",
        "method": "GET",
        "params": [
          "ruleIds",
          "filterMap"
        ]
      },
      {
        "sno": 14,
        "name": "sentinelone_expireSite",
        "safeName": "sentinelone_expireSite",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/sites/{siteId}/expire-now",
        "method": "DELETE",
        "params": [
          "siteId"
        ]
      },
      {
        "sno": 15,
        "name": "sentinelone_getAccounts",
        "safeName": "sentinelone_getAccounts",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/accounts?accountIds={accountIds}",
        "method": "GET",
        "params": [
          "accountIds",
          "limit",
          "cursor"
        ]
      },
      {
        "sno": 16,
        "name": "sentinelone_getActivities",
        "safeName": "sentinelone_getActivities",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/activities",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 17,
        "name": "sentinelone_getAgents",
        "safeName": "sentinelone_getAgents",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents",
        "method": "GET",
        "params": [
          "agentIds",
          "filterMap"
        ]
      },
      {
        "sno": 18,
        "name": "sentinelone_getAlerts",
        "safeName": "sentinelone_getAlerts",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/alerts",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 19,
        "name": "sentinelone_getBlockList",
        "safeName": "sentinelone_getBlockList",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/restrictions",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 20,
        "name": "sentinelone_getDetectionRules",
        "safeName": "sentinelone_getDetectionRules",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/rules",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 21,
        "name": "sentinelone_getDVQueryStatus",
        "safeName": "sentinelone_getDVQueryStatus",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/dv/query-status?queryId={queryId}",
        "method": "GET",
        "params": [
          "queryId"
        ]
      },
      {
        "sno": 22,
        "name": "sentinelone_getEvents",
        "safeName": "sentinelone_getEvents",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/dv/events?queryId={queryId}",
        "method": "GET",
        "params": [
          "queryId",
          "filterMap"
        ]
      },
      {
        "sno": 23,
        "name": "sentinelone_getGroups",
        "safeName": "sentinelone_getGroups",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/groups",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 24,
        "name": "sentinelone_getInstalledApplications",
        "safeName": "sentinelone_getInstalledApplications",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/singularity-marketplace/applications",
        "method": "GET",
        "params": [
          "agentIds",
          "filterMap"
        ]
      },
      {
        "sno": 25,
        "name": "sentinelone_getIOC",
        "safeName": "sentinelone_getIOC",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threat-intelligence/iocs",
        "method": "GET",
        "params": [
          "accountIds",
          "filterMap"
        ]
      },
      {
        "sno": 26,
        "name": "sentinelone_getRemoteScriptTaskResults",
        "safeName": "sentinelone_getRemoteScriptTaskResults",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/remote-scripts/fetch-files",
        "method": "GET",
        "params": [
          "taskIds",
          "computerName",
          "filterMap"
        ]
      },
      {
        "sno": 27,
        "name": "sentinelone_getRemoteScriptTaskStatus",
        "safeName": "sentinelone_getRemoteScriptTaskStatus",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/remote-scripts/status?parentTaskId={taskIds}",
        "method": "GET",
        "params": [
          "taskIds",
          "filterMap"
        ]
      },
      {
        "sno": 28,
        "name": "sentinelone_getServiceUsers",
        "safeName": "sentinelone_getServiceUsers",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/service-users?{userIds}",
        "method": "GET",
        "params": [
          "accountIds",
          "ids",
          "roleIds",
          "siteIds",
          "limit",
          "cursor"
        ]
      },
      {
        "sno": 29,
        "name": "sentinelone_getThreatNotes",
        "safeName": "sentinelone_getThreatNotes",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats/{threatId}/notes",
        "method": "GET",
        "params": [
          "threatId",
          "limit",
          "cursor"
        ]
      },
      {
        "sno": 30,
        "name": "sentinelone_getThreats",
        "safeName": "sentinelone_getThreats",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 31,
        "name": "sentinelone_getWhitelist",
        "safeName": "sentinelone_getWhitelist",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/unified-exclusions",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 32,
        "name": "sentinelone_initiateEndpointScan",
        "safeName": "sentinelone_initiateEndpointScan",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents/actions/initiate-scan",
        "method": "POST",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 33,
        "name": "sentinelone_markAsThreat",
        "safeName": "sentinelone_markAsThreat",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats/dv-mark-as-threat",
        "method": "GET",
        "params": [
          "agentId",
          "storyLine",
          "initiatedby",
          "status"
        ]
      },
      {
        "sno": 34,
        "name": "sentinelone_mitigateThreat",
        "safeName": "sentinelone_mitigateThreat",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats/mitigate/{action}",
        "method": "GET",
        "params": [
          "threatIds",
          "action",
          "filterMap"
        ]
      },
      {
        "sno": 35,
        "name": "sentinelone_moveAgent",
        "safeName": "sentinelone_moveAgent",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/groups/{groupId}/move-agents",
        "method": "PUT",
        "params": [
          "groupId",
          "filterMap"
        ]
      },
      {
        "sno": 36,
        "name": "sentinelone_reactivateSite",
        "safeName": "sentinelone_reactivateSite",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/sites/{siteId}/reactivate",
        "method": "POST",
        "params": [
          "siteId",
          "filterMap"
        ]
      },
      {
        "sno": 37,
        "name": "sentinelone_removeItemFromWhiteList",
        "safeName": "sentinelone_removeItemFromWhiteList",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/unified-exclusions",
        "method": "PUT",
        "params": [
          "exclusionId",
          "type"
        ]
      },
      {
        "sno": 38,
        "name": "sentinelone_runRemoteScript",
        "safeName": "sentinelone_runRemoteScript",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/remote-scripts/execute",
        "method": "POST",
        "params": [
          "accountIds",
          "agentIds",
          "scriptId",
          "outputDestination",
          "outputDirectory",
          "taskDescription",
          "filterMap"
        ]
      },
      {
        "sno": 39,
        "name": "sentinelone_shutdownAgent",
        "safeName": "sentinelone_shutdownAgent",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents/actions/shutdown",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 40,
        "name": "sentinelone_uninstallAgent",
        "safeName": "sentinelone_uninstallAgent",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/agents/actions/uninstall",
        "method": "GET",
        "params": [
          "filterMap"
        ]
      },
      {
        "sno": 41,
        "name": "sentinelone_updateAlertStatus",
        "safeName": "sentinelone_updateAlertStatus",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/alerts/incident",
        "method": "PUT",
        "params": [
          "alertIds",
          "incidentStatus",
          "filterMap"
        ]
      },
      {
        "sno": 42,
        "name": "sentinelone_updateAlertVerdict",
        "safeName": "sentinelone_updateAlertVerdict",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/alerts/analyst-verdict",
        "method": "PUT",
        "params": [
          "alertIds",
          "verdict",
          "filterMap"
        ]
      },
      {
        "sno": 43,
        "name": "sentinelone_updateDetectionRules",
        "safeName": "sentinelone_updateDetectionRules",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/cloud-detection/rules/{ruleId}",
        "method": "PUT",
        "params": [
          "ruleId",
          "name",
          "expirationMode",
          "severity",
          "queryType",
          "status",
          "filterMap",
          "dataMap"
        ]
      },
      {
        "sno": 44,
        "name": "sentinelone_updateThreatAnalystVerdict",
        "safeName": "sentinelone_updateThreatAnalystVerdict",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats/incident",
        "method": "PUT",
        "params": [
          "threatIds",
          "analystVerdict",
          "incidentStatus",
          "filterMap"
        ]
      },
      {
        "sno": 45,
        "name": "sentinelone_updateThreatStatus",
        "safeName": "sentinelone_updateThreatStatus",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats/incident",
        "method": "PUT",
        "params": [
          "threatIds",
          "threatStatus"
        ]
      },
      {
        "sno": 46,
        "name": "sentinelone_writeThreatNote",
        "safeName": "sentinelone_writeThreatNote",
        "api": "https://{INSTANCE_URL}/web/api/v2.1/threats/notes",
        "method": "POST",
        "params": [
          "threatIds",
          "note"
        ]
      }
    ]
  },
  "crowdstrike_falcon": {
    "displayName": "Crowdstrike Falcon",
    "functionCount": 60,
    "functions": [
      {
        "sno": 1,
        "name": "crowdstrike_searchDevice",
        "safeName": "crowdstrike_searchDevice",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/devices/v2",
        "method": "GET",
        "params": [
          "deviceIds"
        ]
      },
      {
        "sno": 2,
        "name": "crowdstrike_searchAlerts",
        "safeName": "crowdstrike_searchAlerts",
        "api": "https://{CLOUD_ENVIRONMENT}/alerts/entities/alerts/v2",
        "method": "GET",
        "params": [
          "includeHidden",
          "compositeIds"
        ]
      },
      {
        "sno": 3,
        "name": "crowdstrike_searchMLExclusions",
        "safeName": "crowdstrike_searchMLExclusions",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/ml-exclusions/v1",
        "method": "GET",
        "params": [
          "ids"
        ]
      },
      {
        "sno": 4,
        "name": "crowdstrike_endpointInformation",
        "safeName": "crowdstrike_endpointInformation",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/devices/v2",
        "method": "DELETE",
        "params": [
          "hostIds"
        ]
      },
      {
        "sno": 5,
        "name": "crowdstrike_getAvailableRoleId",
        "safeName": "crowdstrike_getAvailableRoleId",
        "api": "https://{CLOUD_ENVIRONMENT}/user-management/queries/roles/v1",
        "method": "GET",
        "params": [
          "action",
          "user_uuid"
        ]
      },
      {
        "sno": 6,
        "name": "crowdstrike_getHostGroups",
        "safeName": "crowdstrike_getHostGroups",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/host-groups/v1",
        "method": "GET",
        "params": [
          "hostGroupIds"
        ]
      },
      {
        "sno": 7,
        "name": "crowdstrike_getRuleGroupDetails",
        "safeName": "crowdstrike_getRuleGroupDetails",
        "api": "https://{CLOUD_ENVIRONMENT}/fwmgr/entities/rule-groups/v1",
        "method": "GET",
        "params": [
          "ids"
        ]
      },
      {
        "sno": 8,
        "name": "crowdstrike_getRuleGroups",
        "safeName": "crowdstrike_getRuleGroups",
        "api": "https://{CLOUD_ENVIRONMENT}/fwmgr/queries/rule-groups/v1",
        "method": "GET",
        "params": [
          "connectionName, sort, filter, metaDataSearch, offset, limit, after"
        ]
      },
      {
        "sno": 9,
        "name": "crowdstrike_getDetectionForIncident",
        "safeName": "crowdstrike_getDetectionForIncident",
        "api": "https://{CLOUD_ENVIRONMENT}/incidents/entities/incidents/GET/v1",
        "method": "GET",
        "params": [
          "incidentIds"
        ]
      },
      {
        "sno": 10,
        "name": "crowdstrike_getQuarantinedFiles",
        "safeName": "crowdstrike_getQuarantinedFiles",
        "api": "https://{CLOUD_ENVIRONMENT}/quarantine/entities/quarantined-files/GET/v1",
        "method": "GET",
        "params": [
          "ids"
        ]
      },
      {
        "sno": 11,
        "name": "crowdstrike_queryODSScanHosts",
        "safeName": "crowdstrike_queryODSScanHosts",
        "api": "https://{CLOUD_ENVIRONMENT}/ods/entities/scan-hosts/v1",
        "method": "POST",
        "params": [
          "hostIds"
        ]
      },
      {
        "sno": 12,
        "name": "crowdstrike_retrieveDetection",
        "safeName": "crowdstrike_retrieveDetection",
        "api": "https://{CLOUD_ENVIRONMENT}/alerts/queries/alerts/v2",
        "method": "GET",
        "params": [
          "connectionName, includeHidden, offset, limit, sort, filter, metaDataSearch"
        ]
      },
      {
        "sno": 13,
        "name": "crowdstrike_retrieveUserInfo",
        "safeName": "crowdstrike_retrieveUserInfo",
        "api": "https://{CLOUD_ENVIRONMENT}/user-management/entities/users/GET/v1",
        "method": "GET",
        "params": [
          "userUuid"
        ]
      },
      {
        "sno": 14,
        "name": "crowdstrike_retrieveUserUuid",
        "safeName": "crowdstrike_retrieveUserUuid",
        "api": "https://{CLOUD_ENVIRONMENT}/user-management/queries/users/v1",
        "method": "GET",
        "params": [
          "connectionName, filter, offset, limit, sort"
        ]
      },
      {
        "sno": 15,
        "name": "crowdstrike_getUserRoleId",
        "safeName": "crowdstrike_getUserRoleId",
        "api": "https://{CLOUD_ENVIRONMENT}/user-management/combined/user-roles/v2",
        "method": "GET",
        "params": [
          "userUuid"
        ]
      },
      {
        "sno": 16,
        "name": "crowdstrike_queryODSScan",
        "safeName": "crowdstrike_queryODSScan",
        "api": "https://{CLOUD_ENVIRONMENT}/ods/entities/scans/v2",
        "method": "POST",
        "params": [
          "scanIds"
        ]
      },
      {
        "sno": 17,
        "name": "crowdstrike_queryODSMaliciousFiles",
        "safeName": "crowdstrike_queryODSMaliciousFiles",
        "api": "https://{CLOUD_ENVIRONMENT}/ods/entities/malicious-files/v1",
        "method": "GET",
        "params": [
          "fileIds"
        ]
      },
      {
        "sno": 18,
        "name": "crowdstrike_queryCombinedSensorUpdatePolicies",
        "safeName": "crowdstrike_queryCombinedSensorUpdatePolicies",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/combined/sensor-update/v2",
        "method": "PUT",
        "params": [
          "connectionName, filter, offset, limit, sort"
        ]
      },
      {
        "sno": 19,
        "name": "crowdstrike_createHostGroups",
        "safeName": "crowdstrike_createHostGroups",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/host-groups/v1",
        "method": "POST",
        "params": [
          "groupType",
          "description",
          "hostGroupName"
        ]
      },
      {
        "sno": 20,
        "name": "crowdstrike_updateHostGroups",
        "safeName": "crowdstrike_updateHostGroups",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/host-groups/v1",
        "method": "PUT",
        "params": [
          "assignmentRule",
          "name",
          "description",
          "hostGroupId"
        ]
      },
      {
        "sno": 21,
        "name": "crowdstrike_deleteHostGroups",
        "safeName": "crowdstrike_deleteHostGroups",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/host-groups/v1",
        "method": "DELETE",
        "params": [
          "hostGroupIds"
        ]
      },
      {
        "sno": 22,
        "name": "crowdstrike_isolateEndpoint",
        "safeName": "crowdstrike_isolateEndpoint",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/devices-actions/v2?action_name=contain",
        "method": "POST",
        "params": [
          "ids"
        ]
      },
      {
        "sno": 23,
        "name": "crowdstrike_unisolateEndpoint",
        "safeName": "crowdstrike_unisolateEndpoint",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/entities/devices-actions/v2?action_name=lift_containment",
        "method": "POST",
        "params": [
          "ids"
        ]
      },
      {
        "sno": 24,
        "name": "crowdstrike_createFirewallPolicy",
        "safeName": "crowdstrike_createFirewallPolicy",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/firewall/v1",
        "method": "POST",
        "params": [
          "name",
          "description",
          "cloneId",
          "platformName"
        ]
      },
      {
        "sno": 25,
        "name": "crowdstrike_updateFirewallPolicy",
        "safeName": "crowdstrike_updateFirewallPolicy",
        "api": "https://{CLOUD_ENVIRONMENT}/fwmgr/entities/policies/v2",
        "method": "PUT",
        "params": [
          "bodyParams"
        ]
      },
      {
        "sno": 26,
        "name": "crowdstrike_performFirewallPolicyAction",
        "safeName": "crowdstrike_performFirewallPolicyAction",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/firewall-actions/v1?action_name={actionName}",
        "method": "PUT",
        "params": [
          "actionParamName",
          "policyIds",
          "actionName",
          "actionParamValue"
        ]
      },
      {
        "sno": 27,
        "name": "crowdstrike_createIOC",
        "safeName": "crowdstrike_createIOC",
        "api": "https://{CLOUD_ENVIRONMENT}/iocs/entities/indicators/v1",
        "method": "POST",
        "params": [
          "comment",
          "indicators"
        ]
      },
      {
        "sno": 28,
        "name": "crowdstrike_createMLExclusion",
        "safeName": "crowdstrike_createMLExclusion",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/ml-exclusions/v1",
        "method": "POST",
        "params": [
          "excludedFrom",
          "comment",
          "valueToMatch",
          "hostGroupIds"
        ]
      },
      {
        "sno": 29,
        "name": "crowdstrike_updateMLExclusion",
        "safeName": "crowdstrike_updateMLExclusion",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/ml-exclusions/v1",
        "method": "PUT",
        "params": [
          "comment",
          "id",
          "groups",
          "is_descendant_process",
          "value"
        ]
      },
      {
        "sno": 30,
        "name": "crowdstrike_deleteMLExclusion",
        "safeName": "crowdstrike_deleteMLExclusion",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/ml-exclusions/v1",
        "method": "DELETE",
        "params": [
          "ids",
          "comment"
        ]
      },
      {
        "sno": 31,
        "name": "crowdstrike_updateDetects",
        "safeName": "crowdstrike_updateDetects",
        "api": "https://{CLOUD_ENVIRONMENT}/alerts/entities/alerts/v3",
        "method": "PUT",
        "params": [
          "includeHidden",
          "bodyParams"
        ]
      },
      {
        "sno": 32,
        "name": "crowdstrike_refreshSession",
        "safeName": "crowdstrike_refreshSession",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/refresh-session/v1",
        "method": "POST",
        "params": [
          "queueOffline",
          "origin",
          "deviceId"
        ]
      },
      {
        "sno": 33,
        "name": "crowdstrike_deleteSession",
        "safeName": "crowdstrike_deleteSession",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/sessions/v1",
        "method": "DELETE",
        "params": [
          "sessionId"
        ]
      },
      {
        "sno": 34,
        "name": "crowdstrike_createBatchSession",
        "safeName": "crowdstrike_createBatchSession",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/combined/batch-init-session/v1",
        "method": "POST",
        "params": [
          "queueOffline",
          "timeoutDuration",
          "hostIds",
          "existingBatchId",
          "hostTimeoutDuration",
          "timeout"
        ]
      },
      {
        "sno": 35,
        "name": "crowdstrike_getScript",
        "safeName": "crowdstrike_getScript",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/scripts/v1",
        "method": "GET",
        "params": [
          "scriptIds"
        ]
      },
      {
        "sno": 36,
        "name": "crowdstrike_deleteScript",
        "safeName": "crowdstrike_deleteScript",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/scripts/v1",
        "method": "DELETE",
        "params": [
          "scriptId"
        ]
      },
      {
        "sno": 37,
        "name": "crowdstrike_runCommand",
        "safeName": "crowdstrike_runCommand",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/admin-command/v1",
        "method": "POST",
        "params": [
          "baseCommand",
          "sessionId",
          "persist",
          "commandString",
          "deviceId"
        ]
      },
      {
        "sno": 38,
        "name": "crowdstrike_runBatchCommand",
        "safeName": "crowdstrike_runBatchCommand",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/combined/batch-admin-command/v1",
        "method": "POST",
        "params": [
          "optionalHosts",
          "persistAll",
          "baseCommand",
          "timeoutDuration",
          "batchId",
          "commandString",
          "hostTimeoutDuration",
          "timeout"
        ]
      },
      {
        "sno": 39,
        "name": "crowdstrike_listNetworkStats",
        "safeName": "crowdstrike_listNetworkStats",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/active-responder-command/v1",
        "method": "GET",
        "params": [
          "sessionId",
          "persist",
          "deviceId"
        ]
      },
      {
        "sno": 40,
        "name": "crowdstrike_killProcess",
        "safeName": "crowdstrike_killProcess",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/active-responder-command/v1",
        "method": "DELETE",
        "params": [
          "processId",
          "sessionId",
          "persist",
          "deviceId"
        ]
      },
      {
        "sno": 41,
        "name": "crowdstrike_listProcesses",
        "safeName": "crowdstrike_listProcesses",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/active-responder-command/v1",
        "method": "GET",
        "params": [
          "sessionId",
          "persist",
          "deviceId"
        ]
      },
      {
        "sno": 42,
        "name": "crowdstrike_getCloudRequestIdResponse",
        "safeName": "crowdstrike_getCloudRequestIdResponse",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/active-responder-command/v1",
        "method": "GET",
        "params": [
          "cloudRequestId"
        ]
      },
      {
        "sno": 43,
        "name": "crowdstrike_listAllSessions",
        "safeName": "crowdstrike_listAllSessions",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/queries/sessions/v1",
        "method": "GET",
        "params": [
          "offset",
          "limit"
        ]
      },
      {
        "sno": 44,
        "name": "crowdstrike_createSession",
        "safeName": "crowdstrike_createSession",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/sessions/v1",
        "method": "POST",
        "params": [
          "queueOffline",
          "deviceId",
          "origin",
          "timeout",
          "timeoutDuration"
        ]
      },
      {
        "sno": 45,
        "name": "crowdstrike_readRegistry",
        "safeName": "crowdstrike_readRegistry",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/active-responder-command/v1",
        "method": "GET",
        "params": [
          "registryKeys",
          "sessionId",
          "persist",
          "deviceId"
        ]
      },
      {
        "sno": 46,
        "name": "crowdstrike_createRuleGroup",
        "safeName": "crowdstrike_createRuleGroup",
        "api": "https://{CLOUD_ENVIRONMENT}/fwmgr/entities/rule-groups/v1",
        "method": "POST",
        "params": [
          "description",
          "enabled",
          "name",
          "platform",
          "rules"
        ]
      },
      {
        "sno": 47,
        "name": "crowdstrike_updateRuleGroup",
        "safeName": "crowdstrike_updateRuleGroup",
        "api": "https://{CLOUD_ENVIRONMENT}/fwmgr/entities/rule-groups/v1",
        "method": "PUT",
        "params": [
          "diff_operations",
          "diff_type",
          "id",
          "rule_ids",
          "rule_versions",
          "tracking"
        ]
      },
      {
        "sno": 48,
        "name": "crowdstrike_revokeUserRole",
        "safeName": "crowdstrike_revokeUserRole",
        "api": "https://{CLOUD_ENVIRONMENT}/user-management/entities/user-role-actions/v1",
        "method": "PUT",
        "params": [
          "roleIds",
          "uuid",
          "cid"
        ]
      },
      {
        "sno": 49,
        "name": "crowdstrike_applyQuarantineFileAction",
        "safeName": "crowdstrike_applyQuarantineFileAction",
        "api": "https://{CLOUD_ENVIRONMENT}/quarantine/entities/quarantined-files/v1",
        "method": "GET",
        "params": [
          "action",
          "ids",
          "comment"
        ]
      },
      {
        "sno": 50,
        "name": "crowdstrike_createSensorPolicy",
        "safeName": "crowdstrike_createSensorPolicy",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/sensor-update/v2",
        "method": "POST",
        "params": [
          "resources"
        ]
      },
      {
        "sno": 51,
        "name": "crowdstrike_createODSScan",
        "safeName": "crowdstrike_createODSScan",
        "api": "https://{CLOUD_ENVIRONMENT}/ods/entities/scans/v1",
        "method": "POST",
        "params": [
          "cloud_ml_level_detection",
          "cloud_ml_level_prevention",
          "cloud_pup_adware_level_detection",
          "cloud_pup_adware_level_prevention",
          "cpu_priority",
          "description",
          "endpoint_notification",
          "file_paths",
          "host_groups",
          "hosts",
          "initiated_from",
          "max_duration",
          "pause_duration",
          "quarantine",
          "scan_exclusions",
          "scan_inclusions",
          "sensor_ml_level_detection",
          "sensor_ml_level_prevention"
        ]
      },
      {
        "sno": 52,
        "name": "crowdstrike_deleteODSScheduledScan",
        "safeName": "crowdstrike_deleteODSScheduledScan",
        "api": "https://{CLOUD_ENVIRONMENT}/ods/entities/scheduled-scans/v1",
        "method": "POST",
        "params": [
          "scanIds"
        ]
      },
      {
        "sno": 53,
        "name": "crowdstrike_createODSScheduledScan",
        "safeName": "crowdstrike_createODSScheduledScan",
        "api": "https://{CLOUD_ENVIRONMENT}/ods/entities/scheduled-scans/v1",
        "method": "POST",
        "params": [
          "cloud_ml_level_detection",
          "cloud_ml_level_prevention",
          "cloud_pup_adware_level_detection",
          "cloud_pup_adware_level_prevention",
          "cpu_priority",
          "description",
          "endpoint_notification",
          "file_paths",
          "host_groups",
          "initiated_from",
          "max_duration",
          "max_file_size",
          "pause_duration",
          "quarantine",
          "scan_exclusions",
          "scan_inclusions",
          "schedule",
          "sensor_ml_level_detection",
          "sensor_ml_level_prevention"
        ]
      },
      {
        "sno": 54,
        "name": "crowdstrike_updatePreventionPolicy",
        "safeName": "crowdstrike_updatePreventionPolicy",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/prevention/v1",
        "method": "PUT",
        "params": [
          "resources"
        ]
      },
      {
        "sno": 55,
        "name": "crowdstrike_performSensorUpdatePolicyAction",
        "safeName": "crowdstrike_performSensorUpdatePolicyAction",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/sensor-update-actions/v1?action_name={actionName}",
        "method": "PUT",
        "params": [
          "actionParamName",
          "sensorPolicyIds",
          "actionName",
          "actionParamValue"
        ]
      },
      {
        "sno": 56,
        "name": "crowdstrike_updateSensorPolicy",
        "safeName": "crowdstrike_updateSensorPolicy",
        "api": "https://{CLOUD_ENVIRONMENT}/policy/entities/sensor-update/v2",
        "method": "PUT",
        "params": [
          "resources"
        ]
      },
      {
        "sno": 57,
        "name": "crowdstrike_resetUserPassword",
        "safeName": "crowdstrike_resetUserPassword",
        "api": "https://{CLOUD_ENVIRONMENT}/user-management/entities/user-actions/v1",
        "method": "PUT",
        "params": [
          "bodyParams"
        ]
      },
      {
        "sno": 58,
        "name": "crowdstrike_deleteFile",
        "safeName": "crowdstrike_deleteFile",
        "api": "https://{CLOUD_ENVIRONMENT}/real-time-response/entities/file/v1",
        "method": "DELETE",
        "params": [
          "sessionId",
          "fileId"
        ]
      },
      {
        "sno": 59,
        "name": "crowdstrike_getRuleDetails",
        "safeName": "crowdstrike_getRuleDetails",
        "api": "https://{CLOUD_ENVIRONMENT}/fwmgr/entities/rules/v1",
        "method": "GET",
        "params": [
          "ids"
        ]
      },
      {
        "sno": 60,
        "name": "crowdstrike_getAvailableDeviceIds",
        "safeName": "crowdstrike_getAvailableDeviceIds",
        "api": "https://{CLOUD_ENVIRONMENT}/devices/queries/devices/v1",
        "method": "GET",
        "params": [
          "connectionName,offset,limit,sort,filter"
        ]
      }
    ]
  },
  "cisco_duo": {
    "displayName": "Cisco Duo",
    "functionCount": 21,
    "functions": [
      {
        "sno": 1,
        "name": "ciscoduo_retrievePolicies",
        "safeName": "ciscoduo_retrievePolicies",
        "api": "https://{APIHOST}/admin/v2/policies",
        "method": "GET",
        "params": [
          "offset",
          "limit"
        ]
      },
      {
        "sno": 2,
        "name": "ciscoduo_retrieveEndpointById",
        "safeName": "ciscoduo_retrieveEndpointById",
        "api": "https://{APIHOST}/admin/v1/endpoints/{endpointId}",
        "method": "DELETE",
        "params": [
          "endpointId"
        ]
      },
      {
        "sno": 3,
        "name": "ciscoduo_retrieveEndpoints",
        "safeName": "ciscoduo_retrieveEndpoints",
        "api": "https://{APIHOST}/admin/v1/endpoints",
        "method": "DELETE",
        "params": [
          "limit",
          "offset"
        ]
      },
      {
        "sno": 4,
        "name": "ciscoduo_createPolicy",
        "safeName": "ciscoduo_createPolicy",
        "api": "https://{APIHOST}/admin/v2/policies",
        "method": "POST",
        "params": [
          "policyName",
          "sections"
        ]
      },
      {
        "sno": 5,
        "name": "ciscoduo_deletePolicy",
        "safeName": "ciscoduo_deletePolicy",
        "api": "https://{APIHOST}/admin/v2/policies/{policyKey}",
        "method": "DELETE",
        "params": [
          "policyKey"
        ]
      },
      {
        "sno": 6,
        "name": "ciscoduo_updatePolicy",
        "safeName": "ciscoduo_updatePolicy",
        "api": "https://{APIHOST}/admin/v2/policies/{policyKey}",
        "method": "PUT",
        "params": [
          "policyKey",
          "sectionsToDelete"
        ]
      },
      {
        "sno": 7,
        "name": "ciscoduo_createuser",
        "safeName": "ciscoduo_createuser",
        "api": "https://{APIHOST}/admin/v1/users",
        "method": "POST",
        "params": [
          "userName",
          "bodyParams"
        ]
      },
      {
        "sno": 8,
        "name": "ciscoduo_modifyUser",
        "safeName": "ciscoduo_modifyUser",
        "api": "https://{APIHOST}/admin/v1/users/{userId}",
        "method": "PUT",
        "params": [
          "userId",
          "bodyParams"
        ]
      },
      {
        "sno": 9,
        "name": "cisco_enrolluser",
        "safeName": "cisco_enrolluser",
        "api": "https://{APIHOST}/admin/v1/users/enroll",
        "method": "POST",
        "params": [
          "userName",
          "email",
          "validSecs"
        ]
      },
      {
        "sno": 10,
        "name": "ciscoduo_deleteUser",
        "safeName": "ciscoduo_deleteUser",
        "api": "https://{APIHOST}/admin/v1/users/{userId}",
        "method": "DELETE",
        "params": [
          "userId"
        ]
      },
      {
        "sno": 11,
        "name": "ciscoduo_retrieveUserById",
        "safeName": "ciscoduo_retrieveUserById",
        "api": "https://{APIHOST}/admin/v1/users/{userId}",
        "method": "GET",
        "params": [
          "userId"
        ]
      },
      {
        "sno": 12,
        "name": "ciscoduo_associateGroupWithUser",
        "safeName": "ciscoduo_associateGroupWithUser",
        "api": "https://{APIHOST}/admin/v1/users/{userId}/groups",
        "method": "GET",
        "params": [
          "userId",
          "groupId"
        ]
      },
      {
        "sno": 13,
        "name": "ciscoduo_createGroup",
        "safeName": "ciscoduo_createGroup",
        "api": "https://{APIHOST}/admin/v1/groups",
        "method": "POST",
        "params": [
          "groupName",
          "description",
          "status"
        ]
      },
      {
        "sno": 14,
        "name": "ciscoduo_updateGroup",
        "safeName": "ciscoduo_updateGroup",
        "api": "https://{APIHOST}/admin/v1/groups/{groupId}",
        "method": "PUT",
        "params": [
          "groupId",
          "groupName",
          "description",
          "status"
        ]
      },
      {
        "sno": 15,
        "name": "ciscoduo_retrieveGroups",
        "safeName": "ciscoduo_retrieveGroups",
        "api": "https://{APIHOST}/admin/v1/groups",
        "method": "GET",
        "params": [
          "groupIds",
          "limit",
          "offset",
          "groupIdList"
        ]
      },
      {
        "sno": 16,
        "name": "ciscoduo_deleteGroup",
        "safeName": "ciscoduo_deleteGroup",
        "api": "https://{APIHOST}/admin/v1/groups/{groupId}",
        "method": "DELETE",
        "params": [
          "groupId"
        ]
      },
      {
        "sno": 17,
        "name": "ciscoduo_getGroupMembers",
        "safeName": "ciscoduo_getGroupMembers",
        "api": "https://{APIHOST}/admin/v2/groups/{groupId}/users",
        "method": "GET",
        "params": [
          "groupId",
          "limit",
          "offset"
        ]
      },
      {
        "sno": 18,
        "name": "ciscoduo_retrieveBypassCodesByUserId",
        "safeName": "ciscoduo_retrieveBypassCodesByUserId",
        "api": "https://{APIHOST}/admin/v1/users/{userId}/bypass_codes",
        "method": "GET",
        "params": [
          "userId"
        ]
      },
      {
        "sno": 19,
        "name": "ciscoduo_deleteBypassCode",
        "safeName": "ciscoduo_deleteBypassCode",
        "api": "https://{APIHOST}/admin/v1/bypass_codes/{bypassCodeId}",
        "method": "DELETE",
        "params": [
          "bypassCodeId"
        ]
      },
      {
        "sno": 20,
        "name": "ciscoduo_retrieveAdministrators",
        "safeName": "ciscoduo_retrieveAdministrators",
        "api": "https://{APIHOST}/admin/v1/admins",
        "method": "GET",
        "params": [
          "offset",
          "limit"
        ]
      },
      {
        "sno": 21,
        "name": "ciscoduo_modifyAdministrators",
        "safeName": "ciscoduo_modifyAdministrators",
        "api": "https://{APIHOST}/admin/v1/admins/{adminId}",
        "method": "PUT",
        "params": [
          "adminId",
          "name",
          "phone",
          "passwordChangeRequired",
          "roleId",
          "restrictedByAdminUnits",
          "status",
          "subAccountRoleId",
          "tokenId"
        ]
      }
    ]
  }
};
