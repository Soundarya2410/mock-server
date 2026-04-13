/**
 * Mock Server for Security Products
 *
 * Serves mock responses for 286 functions across 7 security products:
 * - VirusTotal (46 functions)
 * - Okta (32 functions)
 * - Bitdefender Cloud (31 functions)
 * - Sophos Central (50 functions)
 * - SentinelOne (46 functions)
 * - CrowdStrike Falcon (60 functions)
 * - Cisco Duo (21 functions)
 *
 * Data sourced from "Mock server - data.xlsx"
 *
 * @version 1.0.0
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Import custom modules
const logger = require('./utils/logger');
const configManager = require('./config/configManager');

// Import routes
const mockRoutes = require('./routes/mockRoutes');
const healthRoutes = require('./routes/healthRoutes');

// Import middleware
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Import metadata
const serviceMeta = require('./data/serviceMeta');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure multer for form-data
const upload = multer({ storage: multer.memoryStorage() });

// =============================================================================
// MIDDLEWARE CONFIGURATION
// =============================================================================

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      scriptSrcAttr: ["'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net"],
      connectSrc: ["'self'"],
      formAction: ["'self'", "*"],
      frameAncestors: ["*"]
    }
  },
  crossOriginOpenerPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key', 'X-Mock-Error',
                   'X-Request-ID', 'X-Timestamp'],
  exposedHeaders: ['X-Request-ID', 'X-Response-Time'],
  credentials: true
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(upload.none());
app.use(morgan('combined', { stream: { write: (message) => logger.http(message.trim()) } }));
app.use(requestLogger);

// Static files for UI
app.use(express.static(path.join(__dirname, 'public')));

// =============================================================================
// ROUTES
// =============================================================================

// Health check
app.use('/health', healthRoutes);

// Mock API routes (all 286 functions across 7 services)
app.use('/mock', mockRoutes);

// Root endpoint — API overview
app.get('/', (req, res) => {
  const totalFunctions = Object.values(serviceMeta).reduce((sum, s) => sum + s.functionCount, 0);
  
  const services = {};
  for (const [key, meta] of Object.entries(serviceMeta)) {
    services[key] = {
      displayName: meta.displayName,
      functionCount: meta.functionCount,
      listEndpoint: `/mock/${key}`,
      sampleEndpoint: `/mock/${key}/${meta.functions[0].safeName}`
    };
  }

  res.json({
    status: 'success',
    message: 'Mock Security Products Server is running',
    version: '1.0.0',
    totalFunctions,
    ui: '/ui',
    endpoints: {
      health: '/health',
      allServices: '/mock',
      serviceDetail: '/mock/:service',
      executeFunction: 'POST /mock/:service/:functionName'
    },
    services,
    usage: {
      description: 'Send a POST request to /mock/:service/:functionName with a JSON body matching the sample request. The server returns the corresponding mock response from the data sheet.',
      example: {
        endpoint: 'POST /mock/okta/okta_getUser',
        body: { connectionName: 'value1', userLogin: 'test.user@example.com' },
        note: 'Use GET /mock/:service/:functionName to see the function details and sample request/response'
      }
    }
  });
});

// Serve UI page
app.get('/ui', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// =============================================================================
// ERROR HANDLING
// =============================================================================

app.use(notFoundHandler);
app.use(errorHandler);

// =============================================================================
// SERVER STARTUP
// =============================================================================

configManager.initialize();

app.listen(PORT, () => {
  const totalFunctions = Object.values(serviceMeta).reduce((sum, s) => sum + s.functionCount, 0);
  logger.info(`Mock Server started on port ${PORT}`);
  logger.info(`Test UI available at http://localhost:${PORT}/ui`);
  logger.info(`Health check at http://localhost:${PORT}/health`);
  logger.info(`${totalFunctions} mock functions ready across ${Object.keys(serviceMeta).length} services:`);
  for (const [key, meta] of Object.entries(serviceMeta)) {
    logger.info(`   ${meta.displayName}: ${meta.functionCount} functions -> /mock/${key}`);
  }
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});

module.exports = app;
