(function () {

  'use strict';

  const compression = require('compression');
  const express = require('express');
  const helmet = require('helmet');
  const path = require('path');
  const winston = require('winston');
  const app = express();
  const port = process.env.PORT || 8080;
  const env = process.env.NODE_ENV || 'development';

  // Logger
  winston.add(winston.transports.File, { filename: 'winston.log', json: false });

  // View Engine
  app.set('view engine', 'vash');

  // Default View Directory
  app.set('views', path.join(__dirname, '/src/app/views'));

  // Public Directory
  app.use(express.static(`${__dirname}/public`));

  // Helmet - secures your app by setting various HTTP headers
  app.use(helmet());

  // Compress responses  
  app.use(compression({
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    }
  }))

  // Homepage
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Node.js/Vash Project Boilerplate',
      randomContent: 'Just some random homepage content...'
    });
  });

  // 404
  app.get('*', function(req, res){
    res.status(404).render('404', {});
  });

  // App Listener - exported because it is needed for unit testing
  module.exports = app.listen(port, () => {
    console.log(`Node server is running in ${env} mode on port ${port}`);
  });

}());
