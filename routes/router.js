var express = require('express')
var app = express()

var api = require('./api')
app.use('/api', api)

app.all('/', (req, res) => {
    res.send('Você acessou o index')
})

module.exports = app
