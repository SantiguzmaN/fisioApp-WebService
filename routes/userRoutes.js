'use strict'

var express = require('express')
var userController = require('../controllers/userController')

var api = express.Router()
api.post('/login', userController.login)
api.post('/signup', userController.signup)

module.exports = api
