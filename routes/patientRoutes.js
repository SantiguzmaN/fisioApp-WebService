'use strict'

var express = require('express')
var patientController = require('../controllers/patientController')
var api = express.Router()
api.post('/savePatient', patientController.savePatient)

module.exports = api
