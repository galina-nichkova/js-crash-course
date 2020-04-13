const express = require('express')
const router = express.Router()
const ensureLogin = require('../middleware/ensure-login')

const SequenceCreationService = require('../services/sequence-creation-service')
  
  router.post('/', ensureLogin, async (req, res) => {
    const request = await SequenceCreationService.requestSequence(req.body)
    res.send(request)
  })

  module.exports = router