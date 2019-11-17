const express = require('express')
const bodyParser = require('body-parser')

const AsanaService = require('./services/asana-service')
const StudentService = require('./services/student-service')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/asana/all', async (req, res) => {
  const asanas = await AsanaService.findAll()
  res.render('asana', { asanas })
})

app.get('/asana/:id', async (req, res) => {
  const asana = await AsanaService.find(req.params.id)
  res.send(asana)
})

app.post('/asana', async (req, res) => {
  const asana = await AsanaService.add(req.body)
  res.send(asana)
})

app.delete('/asana/:id', async (req, res) => {
  const asana = await AsanaService.del(req.params.id)
  res.send(asana)
})

app.get('/student/all', async (req, res) => {
  const students = await StudentService.findAll()
  res.render('student', { students })
})

app.get('/student/:id', async (req, res) => {
  const student = await StudentService.find(req.params.id)
  res.send(student)
})

app.post('/student', async (req, res) => {
  const student = await StudentService.add(req.body)
  res.send(student)
})

app.delete('/student/:id', async (req, res) => {
  const student = await StudentService.del(req.params.id)
  res.send(student)
})

app.get('/student/:id/request', async (req, res) => {
  const student = await StudentService.find(req.params.id)
  await StudentService.requestSeq(student, 30, 'back bend')
  console.log(student)
  console.log(res.status)
  res.send('ok')
})

app.listen(4000, () => {
  console.log('Server listening')
})
