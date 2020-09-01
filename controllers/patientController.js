'use strict'

var Patient = require('../models/patient')

function savePatient (req, res) {
  var patient = new Patient()
  if (req.body) {
    const body = req.body
    patient.photo = body.photo
    patient.sex = body.sex
    patient.name = body.name
    patient.lastName = body.lastName
    patient.age = body.age
    patient.cc = body.cc
    patient.email = body.email
    patient.rh = body.rh
    patient.eps = body.eps
    patient.movil = body.movil
    patient.phone = body.phone
    patient.allergie = body.allergie
    patient.basePathology = body.basePathology
    patient.companion = body.companion
    patient.companionMovil = body.companionMovil
    Patient.findOne({ email: patient.email.toLowerCase() }, (err, issetUser) => {
      if (err) {
        res.status(500).send({ message: 'Error al comprobar el usuario' })
      } else if (!issetUser) {
        patient.save((err, userStored) => {
          if (err) {
            res.status(500).send({ message: 'Error al guardar el usuario' })
          } else {
            if (!userStored) {
              res.status(404).send({ message: 'No se ha registrado el usuario' })
            } else {
              res.send({ status: true })
            }
          }
        })
      } else {
        res.send({
          status: false
        })
      }
    })
  } else {
    res.end('error')
  }
}

module.exports = {
  savePatient
}
