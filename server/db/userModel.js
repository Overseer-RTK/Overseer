const Sequelize = require('sequelize');

const sequelize = new Sequelize('overseerUsers', 'overseer', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const OverseerUsers = sequelize.define('user', {
    _id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
});

sequelize.sync();

module.exports = OverseerUsers;


