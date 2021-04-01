/**
 * Application Context that holds resources used through the system
 *
 * @author Kim Thi
 */
import bluebird from 'bluebird';
import redis from 'redis';

import config from '../../core/config/index.js';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class AppContext {
  /**
   * @constructor
   */
  constructor() {
    this.redisClient = null;
    this.initialize();
  }

  initialize() {
    this.createRedisClient();
  }

  createRedisClient() {
    this.redisClient = redis.createClient(config.redis.oauth);

    this.redisClient.on('error', error => {
      console.log(`Connection redis has problem -  ${error.stack}`);
    });
  }

  getRedisClient() {
    return this.redisClient;
  }

  destroy() {
    if(this.redisClient) {
      this.redisClient.quit();
    }
  }
}

export default AppContext;
