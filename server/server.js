const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const userController = require('./controller/userController');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/hi', userController.createUser);

app.listen(3000, () => {
  console.log('Port is listening!');
});

module.exports = app;
