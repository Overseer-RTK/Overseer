const Sequelize = require('sequelize');

const sequelize = new Sequelize('overseerUsers', 'overseer', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = {
  Sequelize, sequelize
};