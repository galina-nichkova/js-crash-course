const express = require('express')
const router = express.Router()

const SequenceService = require('../services/sequence-service')

  router.get('/all', async (req, res) => {
    const sequences = await SequenceService.findAll()
    res.render('sequence', { sequences })
  })
  
  router.get('/:id', async (req, res) => {
    const sequence = await SequenceService.find(req.params.id)
    if (!sequence) res.status(404)
    res.send(sequence)
  })
  
  router.post('/', async (req, res) => {
    const sequence = await SequenceService.add(req.body)
    res.send(sequence)
  })
  
  router.delete('/:id', async (req, res) => {
    const sequence = await SequenceService.del(req.params.id)
    res.send(sequence)
  })

module.exports = router