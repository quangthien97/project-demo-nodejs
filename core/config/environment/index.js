import fs from 'fs';
import localConfig from './local.js';

const CONFIGS = {
  local: localConfig
};

class Config {
  /**
   * load config from device file
   *
   * @static
   * @param {*} deviceFile
   * @returns
   * @memberof Config
   */
  static loadDeviceFile(deviceFile) {
    let deviceConfig = {};
    if(!fs.existsSync(deviceFile)) return deviceConfig;

    try {
      deviceFile = fs.readFileSync(deviceFile).toString();
      deviceConfig = JSON.parse(deviceFile);
      deviceConfig = deviceConfig.config || {};
    } catch(err) {
      // nothing
    }

    return deviceConfig;
  }

  /**
   * Convert sequelize output to raw json
   *
   * @static
   * @param {*} env
   * @returns
   * @memberof Config
   */
  static getConfigByEnv(env) {
    return CONFIGS[env];
  }
}

export default Config;
