const express = require('express');
const authController = require('../controller/auth');

const Router = express.Router();

Router.post('/login', authController.postLogin);

Router.post('/register', authController.postRegister);

module.exports = Router;