const express = require('express')
const app = express()
const port = process.ENV || 3000
const xMove = require('./x')
app.use(express.static('public'))

app.use('/', express.static('public'))

app.listen(port, function () {
  console.log('tic-tac-toe listening on port 3000!')
})



