'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var port = process.env.PORT || 3002

mongoose.Promise = global.Promise
mongoose.connect('mongodb://SantiguzmaN:Santi0514**@ds155903.mlab.com:55903/fisioappdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('thats perfect my dog!')

    app.listen(port, () => {
      console.log(`The local server with Node and Express is running correctly on the port: ${port}`)
    })
  })
  .catch(err => console.log(err))
