'use strict'

var express = require('express')
var patientController = require('../controllers/patientController')
var api = express.Router()
api.post('/savePatient', patientController.savePatient)
api.post('/getAllPatients', patientController.getAllUsers)
api.post('/getPatient', patientController.getUserByCc)
api.post('/updatePatient/:id', patientController.updatePatient)

module.exports = api
