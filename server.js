const express = require('express');
const helmet = require('helmet');
const path = require('path');
const winston = require('winston');
const app = express();
const port = 4000;
const env = process.env.NODE_ENV || 'development';

// Logger
winston.add(winston.transports.File, { filename: 'winston.log' });

// View Engine
app.set('view engine', 'vash');

// Default View Directory
app.set('views', path.join(__dirname, '/src/app/views'));

// Public Directory
app.use(express.static(__dirname + '/public'));

// Helmet - secures your app by setting various HTTP headers
app.use(helmet());

// Homepage
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Node.js/Vash Project Boilerplate',
    randomContent: 'Just some random homepage content...'
  });
});

// App Listener - exported because it is needed for unit testing
module.exports = app.listen(port, () => {
  console.log(`Node server is running in ${env} mode on port ${port}`);
});
