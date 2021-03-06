const express = require('express')
const router = express.Router()

const AsanaService = require('../services/asana-service')

  router.get('/all', async (req, res) => {
    const asanas = await AsanaService.findAll()
    res.render('asana', { asanas })
  })
  
  router.get('/all/json', async (req, res) => {
    const asanas = await AsanaService.findAll()
    res.send(asanas)
  })

  router.get('/:id', async (req, res) => {
    const asana = await AsanaService.find(req.params.id)
    if (!asana) res.status(404)
    res.send(asana)
  })

  router.get('/findByEmphasis/:emphasis', async (req, res) => {
    const asanas = await AsanaService.findAsanasByEmphasis(req.params.emphasis)
    if (!asanas) res.status(404)
    res.send(asanas)
  })
  
  router.get('/findByEnglishName/:name', async (req, res) => {
    const asana = await AsanaService.findAsanaByEnglishName(req.params.name)
    if (!asana) res.status(404)
    res.send(asana)
  })

  router.post('/', async (req, res) => {
    const asana = await AsanaService.add(req.body)
    res.send(asana)
  })
  
  router.delete('/:id', async (req, res) => {
    const asana = await AsanaService.del(req.params.id)
    res.send(asana)
  })

module.exports = router