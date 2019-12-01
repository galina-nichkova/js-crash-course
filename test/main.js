import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new empty sequence', async t => {
t.plan(5)
    const sequenceToCreate = {
    level: 333,
    duration: 30,
    emphasis: 'back bend',
    asanas: []
    }

    const res = await request(app)
    .post('/main')
    .send(sequenceToCreate)

    t.is(res.status, 200)
    t.is(res.body.level, sequenceToCreate.level)
    t.is(res.body.duration, sequenceToCreate.duration)
    t.is(res.body.emphasis, sequenceToCreate.emphasis)
    t.deepEqual(res.body.asanas, sequenceToCreate.asanas)
})
