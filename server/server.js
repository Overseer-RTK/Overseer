const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, './client')));

app.post();

app.get();

app.listen(8080, () => {
  console.log('listening');
});

module.exports = app;
