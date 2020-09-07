'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PhysiotherapistSchema = Schema({

  name: String,
  email: String,
  password: String
})

module.exports = mongoose.model('Physiotherapist', PhysiotherapistSchema)
