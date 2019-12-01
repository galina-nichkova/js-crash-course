import test from 'ava'
import request from 'supertest'
import app from '../app'

const SequenceService = require('../services/sequence-service')

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
 
    // t.is(createdAsana.status, 200)
 
     const createdSequence = (await request(app)
     .post('/sequence')
     .send(sequenceToCreate)).body
 
     //t.is(createdSequence.status, 200)
 
     await SequenceService.addAsanaToSequence(createdAsana, createdSequence)
 
     const fetchSeq = await request(app).get(`/sequence/${createdSequence._id}`)
     t.is(fetchSeq.status, 200)
     t.is(fetchSeq.asanas[0], createdAsana)
 })
 