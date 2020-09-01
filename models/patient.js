'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PatientSchema = Schema({
  photo: String,
  sex: String,
  name: String,
  lastName: String,
  age: String,
  cc: String,
  email: String,
  rh: String,
  eps: String,
  movil: String,
  phone: String,
  allergies: String,
  basePathology: String,
  companion: String,
  companionMovil: String,
  appointment: { type: Schema.ObjectId, ref: 'Appointment' }
})

module.exports = mongoose.model('Patient', PatientSchema)
