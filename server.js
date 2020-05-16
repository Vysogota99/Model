const express = require('express')
const serverStatit = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serverStatit(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)