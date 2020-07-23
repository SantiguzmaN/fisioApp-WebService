'use strict'

var app = require('./app')
var port = process.env.PORT || 3002

app.listen(port, () => {
  console.log(`The local server with Node and Express is running correctly on the port: ${port}`)
})
