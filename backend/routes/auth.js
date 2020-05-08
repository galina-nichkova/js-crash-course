const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const passport = require('passport')
const ensureLogin = require('../middleware/ensure-login')


router.get('/login', ensureLogin, (req, res, next) =>{
    res.send({user: req.session.passport.user, id: req.user._id, level: req.user.level})
})

router.post('/register', async (req, res) => {
    const account = await Student.register({username: req.body.username}, req.body.password)
          res.send(account)}
      
)

router.post('/local', (req, res, next) => {
    //console.log("URRAAAAAAAAAAAAAAAAAAAAAA");
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.status(400).send([user, "Cannot log in", info]);
      }
  
      req.login(user, err => {
        res.send("Logged in");
      });
    })(req, res, next);
  });

  router.get('/logout', async (req, res) => {
    await req.logout();  
    return res.send();
  });

module.exports = router