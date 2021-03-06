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
        password: 'test',
        requestedSequence: []
    }

    const createdStudent = (await request(app)
    .post('/student')
    .send(testStudent)).body

    await request(app)
    .post('/student/updateLevel')
    .send({level:2, studentId:`${createdStudent._id}`})

    const fetchStudent = await request(app).get(`/student/${createdStudent._id}`)
    t.is(fetchStudent.status, 200)
    t.is(fetchStudent.body.level, 2)

    await request(app).delete(`/student/${createdStudent._id}`)
})

test('Return sequences of a student', async t =>{
    const testStudent = {
        username: 'GalinaTest',
        password: 'test',
        level: 3,
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
    
    await request(app)
    .post('/sequence-creation')
    .send(testRequest)

    const fetchSequences = await request(app).get(`/student/${createdStudent._id}/sequences`)
    t.is(fetchSequences.status, 200)
    t.is(fetchSequences.body.length, 1)
    t.is(fetchSequences.body[0].duration, 30)
    t.is(fetchSequences.body[0].emphasis, "back bend")

    await request(app).delete(`/student/${createdStudent._id}`)
})