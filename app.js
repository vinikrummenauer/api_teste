const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sobre', function (req, res) {
    res.json({name: "api_teste",
    version: "1.0.0",
    description: "teste de api"})
  })

app.get('/circulo/area/:raio', function (req, res) {
    const raio = req.params.raio;
    const area = Math.PI * raio * raio;
    res.json({formaGeometrica: "circulo",
    circunferencia: raio,
    area: area})
})

app.listen(3000)