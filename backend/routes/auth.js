const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const passport = require('passport')

router.get('/login', (req, res, next) =>{
    res.render('login')
})

router.post('/register', async (req, res) => {
    const account = await Student.register({username: req.body.username}, req.body.password)
    res.send(account)
})

router.post('/local', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}))
module.exports = router