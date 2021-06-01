import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

// import { isDevelop } from './helpers/env';
import cors from 'cors';
// project modules
import config from './core/config/index';
import logger from './core/logger/app-logger';
import './models/index';

// Server
import { handleValidateError, handleNotFoundError } from './core/init/server';
// Init common
import './core/init/index.js';
// route
import apiRoute from './routes/index';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors());

(async() => {
  try {
    // initialize resource
    global.logger = logger;

    // Import Origin base API
    app.use('/apis', apiRoute);
    

    app.get('/version', (req, res) => res.json({
      ok: true,
      version: '0.0.0'
    }));

    app.use('/test/:fileName', (req, res) => {
      let data = {};
      res.render(`test/${req.params.fileName}`, data);
    });

    // Handle error message when validate data
    app.use(handleValidateError);

    // Handle case incorrect API
    app.use(handleNotFoundError);

    await app.listen(config.port);

    console.log(`API started on port: ${config.port}`);
  } catch(err) {
    console.log(err);
  }
})();
