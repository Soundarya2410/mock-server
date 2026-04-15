/**
 * Mock API Routes
 *
 * Universal route handler for all 286 functions across 7 services.
 * 
 * Endpoint pattern:
 *   POST /mock/:service/:functionName  — Execute a mock function (primary)
 *   GET  /mock/:service/:functionName  — Execute a mock function (alternative)
 *   GET  /mock/:service               — List all functions for a service
 *   GET  /mock                        — List all services
 *
 * The request body should match the "sampleRequest" from the xlsx.
 * The response returns the "sampleResponse" from the xlsx.
 */

const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');
const { getMockData } = require('../data/mockResponses');
const serviceMeta = require('../data/serviceMeta');

// ============================================================================
// GET /mock — List all services and their function counts
// ============================================================================
router.get('/', (req, res) => {
  const services = {};
  for (const [key, meta] of Object.entries(serviceMeta)) {
    services[key] = {
      displayName: meta.displayName,
      functionCount: meta.functionCount,
      functions: meta.functions.map(f => ({
        sno: f.sno,
        name: f.name,
        method: f.method,
        api: f.api,
        params: f.params,
        endpoint: `/mock/${key}/${f.safeName}`
      }))
    };
  }
  res.json({
    status: 'success',
    message: 'Mock Server — All Services',
    totalFunctions: Object.values(serviceMeta).reduce((sum, s) => sum + s.functionCount, 0),
    services
  });
});

// ============================================================================
// GET /mock/:service — List all functions for a specific service
// ============================================================================
router.get('/:service', (req, res) => {
  const { service } = req.params;
  const meta = serviceMeta[service];

  if (!meta) {
    return res.status(404).json({
      status: 'failure',
      message: `Service "${service}" not found`,
      availableServices: Object.keys(serviceMeta)
    });
  }

  const mockData = getMockData();
  const serviceData = mockData[service] || {};
  const functions = meta.functions.map(f => {
    const fnData = serviceData[f.safeName];
    return {
      sno: f.sno,
      name: f.name,
      method: f.method,
      api: f.api,
      params: f.params,
      endpoint: `/mock/${service}/${f.safeName}`,
      sampleRequest: fnData ? fnData.sampleRequest : null
    };
  });

  res.json({
    status: 'success',
    service: meta.displayName,
    functionCount: meta.functionCount,
    functions
  });
});

// ============================================================================
// POST/GET /mock/:service/:functionName — Execute a mock function
// ============================================================================
function handleMockRequest(req, res) {
  const { service, functionName } = req.params;
  const meta = serviceMeta[service];

  if (!meta) {
    return res.status(404).json({
      status: 'failure',
      message: `Service "${service}" not found`,
      availableServices: Object.keys(serviceMeta)
    });
  }

  const mockData = getMockData();
  const serviceData = mockData[service];
  if (!serviceData) {
    return res.status(404).json({
      status: 'failure',
      message: `No mock data found for service "${service}"`
    });
  }

  // Find function by exact name or case-insensitive match
  let fnData = serviceData[functionName];
  if (!fnData) {
    // Try case-insensitive lookup
    const lowerName = functionName.toLowerCase();
    for (const [key, val] of Object.entries(serviceData)) {
      if (key.toLowerCase() === lowerName) {
        fnData = val;
        break;
      }
    }
  }

  if (!fnData) {
    const available = meta.functions.map(f => f.safeName);
    return res.status(404).json({
      status: 'failure',
      message: `Function "${functionName}" not found in service "${service}"`,
      availableFunctions: available
    });
  }

  logger.info(`Mock call: ${service}/${functionName}`, {
    requestBody: req.body,
    queryParams: req.query
  });

  // Validate incoming request against the sample request
  const sampleRequest = fnData.sampleRequest;
  const incomingBody = req.body || {};

  if (sampleRequest && typeof sampleRequest === 'object' && Object.keys(sampleRequest).length > 0) {
    const mismatches = [];

    for (const [key, expectedValue] of Object.entries(sampleRequest)) {
      if (!(key in incomingBody)) {
        mismatches.push({ field: key, expected: expectedValue, received: '(missing)' });
      } else if (JSON.stringify(incomingBody[key]) !== JSON.stringify(expectedValue)) {
        mismatches.push({ field: key, expected: expectedValue, received: incomingBody[key] });
      }
    }

    if (mismatches.length > 0) {
      logger.warn(`Request mismatch for ${service}/${functionName}`, { mismatches });
      return res.status(400).json({
        status: 'failure',
        message: 'Mismatched request — the request body does not match the expected sample request.',
        functionName: fnData.functionName,
        mismatches,
        expectedRequest: sampleRequest,
        receivedRequest: incomingBody
      });
    }
  }

  // Return the sample response from the xlsx
  const response = fnData.sampleResponse;

  // If response is a string (couldn't parse as JSON), return as-is
  if (typeof response === 'string') {
    try {
      return res.json(JSON.parse(response));
    } catch {
      return res.json({ result: response });
    }
  }

  return res.json(response);
}

router.post('/:service/:functionName', handleMockRequest);
router.get('/:service/:functionName', handleMockRequest);
router.put('/:service/:functionName', handleMockRequest);
router.delete('/:service/:functionName', handleMockRequest);

module.exports = router;
module.exports.handleMockRequest = handleMockRequest;
