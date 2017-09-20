const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

// View Engine
app.set('view engine', 'vash');

// Default View Directory
app.set('views', path.join(__dirname, '/src/app/views'));

// Public Directory
app.use(express.static(__dirname + '/public'));

// Homepage
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Node.js/Vash Project Boilerplate',
    randomContent: 'Just some random homepage content...'
  });
});

// App Listener - exported because it is needed for unit testing
module.exports = app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
