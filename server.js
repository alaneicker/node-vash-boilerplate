const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

app.set('view engine', 'vash');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Node.js/Vash Project Boilerplate',
    randomContent: 'Just some random homepage content...'
  });
});

module.exports = app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
