const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// Midleweres

/* Captura todas as requisicoes que usam o padrao urlencoded (padrao usado na
 submisao de formularios) para que o bodyParser faca o parser. */
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`Bakend is running on port ${port}.`)
})

module.exports = server