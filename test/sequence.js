import test from 'ava'
import request from 'supertest'
import app from '../app'

const SequenceService = require('../services/sequence-service')
const AsanaService = require('../services/asana-service')

test('Create new empty sequence', async t => {
t.plan(5)
    const sequenceToCreate = {
    level: 2,
    duration: 45,
    emphasis: 'core',
    asanas: []
    }

    const res = await request(app)
    .post('/sequence')
    .send(sequenceToCreate)

    t.is(res.status, 200)
    t.is(res.body.level, sequenceToCreate.level)
    t.is(res.body.duration, sequenceToCreate.duration)
    t.is(res.body.emphasis, sequenceToCreate.emphasis)
    t.deepEqual(res.body.asanas, sequenceToCreate.asanas)
})

test('Add asana to sequence', async t => {
    // t.plan(4)
    const asanaToCreate = {
     nameEnglish: 'Mountain Pose',
     nameSanskrit: 'Tadasana',
     duration: 2,
     emphasis: 'balance',
     restriction: 'placeholder',
     levels: [1, 2],
     canBeFollowedBy: 'placeholder',
     pic: 'placeholder'
     }
 
     const sequenceToCreate = {
     level: 55,
     duration: 444,
     emphasis: 'back',
     asanas: []
     }
 
     const createdAsana = (await request(app)
     .post('/asana')
     .send(asanaToCreate)).body
 
     const newAsana = await AsanaService.find(`${createdAsana._id}`)
 
     const createdSequence = (await request(app)
     .post('/sequence')
     .send(sequenceToCreate)).body
 
     const newSequence = await SequenceService.find(`${createdSequence._id}`)
 
     await SequenceService.addAsanaToSequence(newAsana, newSequence)
 
     const fetchSeq = await request(app).get(`/sequence/${newSequence._id}`)
     t.is(fetchSeq.status, 200)
     
     t.deepEqual(fetchSeq.body.asanas[0], createdAsana)
 })
 