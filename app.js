const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('home/home')
})

// JOGA DA MEMORIA
app.get('/nivel01', (req, res) => {
  res.render('Jogo da Memoria/nivel 01');
})

app.get('/nivel02', (req, res) => {
  res.render('Jogo da Memoria/nivel 02');
})

app.get('/nivel03', (req, res) => {
  res.render('Jogo da Memoria/nivel 03');
})

app.get('/nivel04', (req, res) => {
  res.render('Jogo da Memoria/nivel 04');
})
//////////// 

// OPERAÇAÕ - SOMA
app.get('/nivel1', (req, res) => {
  res.render('Operação - Soma/nivel 01');
})
app.get('/nivel2', (req, res) => {
  res.render('Operação - Soma/nivel 02');
})
app.get('/nivel3', (req, res) => {
  res.render('Operação - Soma/nivel 03');
})
////////////
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})