'use strict';

/**
 * veterinary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::veterinary.veterinary');
