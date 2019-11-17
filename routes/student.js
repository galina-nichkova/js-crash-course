const express = require('express')
const router = express.Router()

const StudentService = require('../services/student-service')

  router.get('/all', async (req, res) => {
    const students = await StudentService.findAll()
    res.render('student', { students })
  })
  
  router.get('/:id', async (req, res) => {
    const student = await StudentService.find(req.params.id)
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

module.exports = router