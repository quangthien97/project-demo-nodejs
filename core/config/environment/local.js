import path from 'path';

// Local specific configuration
// ==================================
const rootPath = path.join(process.cwd());
export default {
  logger: {
    path: `${rootPath}/logs`,
    fileName: 'sample-log'
  },

  session: {
    secret: 'z5l1c9dpSD', // random key
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxAgeRemember: 30 * 24 * 60 * 60 * 1000, // 30 days
    resave: false,
    saveUninitialized: true
  },

  token: {
    userToken: {
      expireTime: 30 * 24 * 60 * 60 * 1000
    },
    admin: {
      resetPassDuration: 60 * 60 * 1000 // 1 hours
    }
  },

  db: {
    host: '127.0.0.1',
    user: 'madops',
    password: 'madops',
    database: 'madops',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },

  redis: {
    session: {
      host: '127.0.0.1',
      port: 6379,
      db: 0
    },
    oauth: {
      host: '127.0.0.1',
      port: 6379,
      db: 0
    }
  }
};
