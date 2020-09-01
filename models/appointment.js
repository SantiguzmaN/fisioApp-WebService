'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AppointmentSchema = Schema({
  name: String
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
