import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Register new student', async t => {
t.plan(2)
    const studentToCreate = {
        username: 'TestUser',
        password: 'test'
    }

    const res = await request(app)
    .post('/auth/register')
    .send(studentToCreate)

    const newStudentId = res.body._id

    const newStudent = (await request(app)
    .get(`/student/${newStudentId}`)).body

    t.is(res.status, 200)
    t.is(studentToCreate.username, newStudent.username)

    await request(app).delete(`/student/${newStudentId}`)

})