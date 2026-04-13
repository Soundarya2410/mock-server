/**
 * Configuration Manager for Mock Custom Functions Server
 */

const logger = require('../utils/logger');

const defaultConfig = {
  authType: 'API Key',
  serverName: 'Mock Custom Functions Server',
  version: '1.0.0',
  okta: {
    baseUrl: 'https://integrator-3476052.okta.com',
    apiVersion: 'v1'
  }
};

class ConfigManager {
  constructor() {
    this.config = { ...defaultConfig };
  }

  initialize() {
    logger.info('Initializing Mock Custom Functions Server configuration...');
    if (process.env.OKTA_BASE_URL) {
      this.config.okta.baseUrl = process.env.OKTA_BASE_URL;
    }
    logger.info('Configuration initialized', { baseUrl: this.config.okta.baseUrl });
    return this.config;
  }

  getConfig() {
    return { ...this.config };
  }

  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    logger.info('Configuration updated');
    return { success: true, config: this.getConfig() };
  }

  resetConfig() {
    this.config = { ...defaultConfig };
    logger.info('Configuration reset to defaults');
    return this.getConfig();
  }
}

module.exports = new ConfigManager();
