const express = require('express')
const router = express.Router()

const SequenceService = require('../services/sequence-service')
const StudentService = require('../services/student-service')

  router.get('/all', async (req, res) => {
    const sequences = await SequenceService.findAll()
    res.render('sequence', { sequences })
  })
  
  router.get('/:id', async (req, res) => {
    const sequence = await SequenceService.find(req.params.id)
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

  router.get('/:id/:duration/:emph', async (req, res) => {
    const student = await StudentService.find(req.params.id)
    await SequenceService.requestSeq(student, req.params.duration, req.params.emph)
    res.send('ok')
  })

module.exports = router