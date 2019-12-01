const express = require('express')
const router = express.Router()

const MainService = require('../services/main-service')
  
  router.post('/', async (req, res) => {
    const request = await MainService.main(req.body)
    res.send(request)
  })

  module.exports = router