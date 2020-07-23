'use strict'

function login (req, res) {
  if (req.body) {
    const body = req.body
    if (body.user === 'tatiana@fisioterapia.com' && body.password === '12345') {
      res.send({
        status: true,
        token: 'xxxx1234',
        userName: 'Tatiana Rivera'
      })
    } else {
      res.send({
        status: false
      })
    }
  } else {
    res.end('error')
  }
}

module.exports = {
  login
}
