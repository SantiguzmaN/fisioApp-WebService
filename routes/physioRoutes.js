'use strict'

var express = require('express')
var physioController = require('../controllers/physioController')

var api = express.Router()
api.post('/login', physioController.login)
api.post('/signup', physioController.signup)

module.exports = api
