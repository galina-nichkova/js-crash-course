import test from 'ava'
import request from 'supertest'
import app from '../app'

const SequenceCreationService = require('../services/sequence-creation-service')
const SequenceService = require('../services/sequence-service')

test('Create new empty sequence and update student', async t => {
//t.plan(5)

    const testStudent = {
    username: 'Lena',
    level: 2,
    requestedSequence: []
    }

    const createdStudent = (await request(app)
    .post('/student')
    .send(testStudent)).body

    const testSequence = {
    level: testStudent.level,
    duration: 30,
    emphasis: 'back bend',
    asanas: []
    }

    const testRequest = {
    studentId: createdStudent._id,
    sequence: testSequence
    }

    const res = await request(app)
    .post('/sequence-creation')
    .send(testRequest)

    t.is(res.status, 200)
    t.is(res.body.sequence.level, testSequence.level)
    t.is(res.body.sequence.emphasis, testSequence.emphasis)
    t.is(res.body.sequence.duration, testSequence.duration)
    t.is(res.body.sequence.asanas.length > 0, true)

    const fetchUpdatedStudent = (await request(app)
    .get(`/student/${createdStudent._id}`)).body

    t.is(fetchUpdatedStudent.requestedSequence[0].duration, testSequence.duration)
    t.is(fetchUpdatedStudent.requestedSequence[0].emphasis, testSequence.emphasis)
    t.is(fetchUpdatedStudent.requestedSequence[0].level, testSequence.level)
})

test('Append asana names to a sequence', async t => {

    const duration = 15

    const testSequence = {
        level: 3,
        duration: 30,
        emphasis: 'back bend',
        asanas: []
        }

    const res = await request(app)
    .post('/sequence')
    .send(testSequence)

    const newSeq = await SequenceService.find(`${res.body._id}`)

    const result = await SequenceCreationService.appendAsanas(duration, newSeq)
    t.is(res.status, 200)
    t.is(result.asanas.length > 0, true)
})
