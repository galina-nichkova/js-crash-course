const express = require('express')
const bodyParser = require('body-parser')

const AsanaRouter = require('./routes/asana')
const StudentRouter = require('./routes/student')
const SequenceRouter = require('./routes/sequence')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/asana', AsanaRouter)
app.use('/student', StudentRouter)
app.use('/sequence', SequenceRouter)

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(3000, () => {
  console.log('Server listening')
})
