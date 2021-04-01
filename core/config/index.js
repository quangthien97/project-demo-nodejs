'use strict';

import path, { parse } from 'path';
import _ from 'lodash';

import Config from './environment/index.js';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.CONFIG_ENV = process.env.CONFIG_ENV || 'local';

const port = process.env.PORT || 3000;

// All configurations will extend these options
// ============================================
const all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${process.cwd()}/`),

  // Server port
  port,

  // Server admin port
  portAdmin: parseInt(port) + 1,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // limit http request body
  bodyLimit: '100kb',

  corsHeaders: ['Link']
};

// Export the config object based on the NODE_ENV
// ============================================

const basicConfig = Config.getConfigByEnv(process.env.CONFIG_ENV);

export default _.merge(
  all,
  basicConfig
);
