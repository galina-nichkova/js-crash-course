import test from 'ava'
import request from 'supertest'
import app from '../app'

const SequenceService = require('../services/sequence-service')
const StudentService = require('../services/student-service')

test('Student can request a sequence', async t => {
t.plan(3)
    const testStudent = {
        username: 'Alina',
        level: 2,
        requestedSequence: []
    }

    const createdStudent = (await request(app)
    .post('/student')
    .send(testStudent)).body

    const testDuration = 35
    const testEmphasis = 'backBend'

    const sequenceRequested = await request(app)
    .post(`/student/${createdStudent._id}/${testDuration}/${testEmphasis}`)

    t.is(sequenceRequested.status, 200)

    const fetchUpdatedStudent = (await request(app)
    .get(`/student/${createdStudent._id}`)).body

    t.is(fetchUpdatedStudent.requestedSequence[0].duration, 35)
    t.is(fetchUpdatedStudent.requestedSequence[0].emphasis, 'backBend')
})

test('Add new sequence to student', async t =>{
    const testStudent = {
        username: 'Karina',
        level: 2,
        requestedSequence: []
    }

    const testSequence = {
        level: 535,
        duration: 44,
        emphasis: 'back',
        asanas: []
        }

    const createdStudent = (await request(app)
    .post('/student')
    .send(testStudent)).body

    const newStudent = await StudentService.find(`${createdStudent._id}`)

    const createdSequence = (await request(app)
    .post('/sequence')
    .send(testSequence)).body

    const newSequence = await SequenceService.find(`${createdSequence._id}`)

    await StudentService.addSequenceToStudentByStudentId(newSequence, newStudent._id)

    const fetchStudent = await request(app).get(`/student/${createdStudent._id}`)
    t.is(fetchStudent.status, 200)
    t.deepEqual(fetchStudent.body.requestedSequence[0], createdSequence)
})

test('Update student level by id', async t =>{
    const testStudent = {
        username: 'Galina',
        requestedSequence: []
    }

    const createdStudent = (await request(app)
    .post('/student')
    .send(testStudent)).body

    await StudentService.updateStudentLevelbyStudentId(2, `${createdStudent._id}`)

    const fetchStudent = await request(app).get(`/student/${createdStudent._id}`)
    t.is(fetchStudent.status, 200)
    t.is(fetchStudent.body.level, 2)
})