const express = require('express')
const app = express()
const port = process.ENV || 3000
const xMove = require('./x')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('tic-tac-toe listening on port 3000!')
})



