const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const AsanaRouter = require('./routes/asana')
const StudentRouter = require('./routes/student')
const SequenceRouter = require('./routes/sequence')
const MainRouter = require('./routes/sequence-creation')
const AuthRouter = require('./routes/auth')

const ensureLogin = require('./middleware/ensure-login')

const Student = require('./models/student')

require('./mongo-connection')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(session({ secret: 'sdkjhgfbdskjfhs', resave: false, saveUninitialized: false, 
store: new MongoStore({ mongooseConnection: mongoose.connection,  collection: 'sessions'})}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(Student.serializeUser())
passport.deserializeUser(Student.deserializeUser())
passport.use(Student.createStrategy())

app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  credentials: true
}))

app.use('/asana', AsanaRouter)
app.use('/student', StudentRouter)
app.use('/sequence', SequenceRouter)
app.use('/sequence-creation', MainRouter)
app.use('/auth', AuthRouter)

app.get('/', ensureLogin, (req, res) => {
  res.render('index', { username: req.user.username })
})

module.exports = app