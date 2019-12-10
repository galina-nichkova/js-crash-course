const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const AsanaRouter = require('./routes/asana')
const StudentRouter = require('./routes/student')
const SequenceRouter = require('./routes/sequence')
const MainRouter = require('./routes/main')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cors())

app.use('/asana', AsanaRouter)
app.use('/student', StudentRouter)
app.use('/sequence', SequenceRouter)
app.use('/main', MainRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app