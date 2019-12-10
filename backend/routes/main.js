const express = require('express')
const router = express.Router()

const MainService = require('../services/main-service')
  
  router.post('/', async (req, res) => {
    const request = await MainService.requestSequence(req.body)
    res.send(request)
  })

  module.exports = router