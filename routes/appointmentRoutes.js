'use strict'

var express = require('express')
var appointmentController = require('../controllers/appointmenController')
var api = express.Router()
api.post('/getGraphic', appointmentController.getGraphic)

module.exports = api
