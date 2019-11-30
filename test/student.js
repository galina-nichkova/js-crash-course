import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Student can request a sequence', async t => {
t.plan(3)
    const testStudent = {
        name: 'Alina',
        password: 'fffff',
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