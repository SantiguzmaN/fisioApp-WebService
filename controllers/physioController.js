'use strict'

var Physiotherapist = require('../models/physiotherapist')

function login (req, res) {
  if (req.body) {
    var params = req.body
    var email = params.email
    var password = params.password
    Physiotherapist.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) {
        res.status(500).send({ message: 'Error al loguear el usuario' })
      } else {
        if (user) {
          if (user.password === password) {
            res.send({
              status: true,
              token: user.name + password,
              userName: user.name
            })
          }
        }
      }
    })
  } else {
    res.send({
      status: false
    })
  }
}

function signup (req, res) {
  var physio = new Physiotherapist()
  if (req.body) {
    console.log('entrates al local')
    const body = req.body
    physio.name = body.name
    physio.email = body.email
    physio.password = body.password
    Physiotherapist.findOne({ email: physio.email.toLowerCase() }, (err, issetUser) => {
      if (err) {
        res.status(500).send({ message: 'Error al comprobar el usuario' })
      } else if (!issetUser) {
        physio.save((err, userStored) => {
          if (err) {
            res.status(500).send({ message: 'Error al guardar el usuario' })
          } else {
            if (!userStored) {
              res.status(404).send({ message: 'No se ha registrado el usuario' })
            } else {
              res.status(200).send({ user: userStored, status: true })
            }
          }
        })
      } else {
        res.status(200).send({
          message: 'El usuario ya existe'
        })
      }
    })
  } else {
    res.end('error')
  }
}

module.exports = {
  login,
  signup
}
