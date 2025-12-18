'use strict';

/**
 * building-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::building-info.building-info');
