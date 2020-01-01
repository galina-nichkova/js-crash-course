const express = require('express')
const router = express.Router()

const SequenceCreationService = require('../services/sequence-creation-service')
  
  router.post('/', async (req, res) => {
    const request = await SequenceCreationService.requestSequence(req.body)
    res.send(request)
  })

  module.exports = router