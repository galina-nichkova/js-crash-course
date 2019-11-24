const express = require('express')
const router = express.Router()

const StudentService = require('../services/student-service')
const SequenceService = require('../services/sequence-service')

  router.get('/all', async (req, res) => {
    const students = await StudentService.findAll()
    res.render('student', { students })
  })
  
  router.get('/:id', async (req, res) => {
    const student = await StudentService.find(req.params.id)
    if (!student) res.status(404)
    res.send(student)
  })
  
  router.post('/', async (req, res) => {
    const student = await StudentService.add(req.body)
    res.send(student)
  })
  
  router.delete('/:id', async (req, res) => {
    const student = await StudentService.del(req.params.id)
    res.send(student)
  })

  router.post('/:id/:duration/:emph', async (req, res) => {
    const student = await StudentService.find(req.params.id)
    await SequenceService.requestSeq(student, req.params.duration, req.params.emph)
    res.send('ok')
  })

module.exports = router