const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

app.set('view engine', 'vash');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(__dirname + '/public'));

var model = {
  title: 'Node.js/Vash Project Boilerplate',
  randomContent: 'Just some random homepage content...'
};

app.get('/', function (req, res) {
  res.render('index', model);
});

var server = app.listen(port, function () {
  console.log(`Node server is running on port ${port}`);
});
