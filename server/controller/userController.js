const userModel = require('../db/userModel');

const userController = {};

userController.createUser = function(req, res, next) {
    userModel.create({firstName:'Kyle', lastName:'Trung'}).then(function(user) {
        console.log('successfully created ', user);
    })
}

module.exports = userController;

