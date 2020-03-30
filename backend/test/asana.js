import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new asana', async t => {
t.plan(9)
    const asanaToCreate = {
    nameEnglish: 'Boat Pose',
    nameSanskrit: 'Navasana',
    duration: 3,
    emphasis: 'core',
    restriction: 'placeholder',
    levels: [1,2],
    canBeFollowedBy: 'placeholder',
    pic: 'placeholder'
    }

    const res = await request(app)
    .post('/asana')
    .send(asanaToCreate)

    t.is(res.status, 200)
    t.is(res.body.nameEnglish, asanaToCreate.nameEnglish)
    t.is(res.body.nameSanskrit, asanaToCreate.nameSanskrit)
    t.is(res.body.duration, asanaToCreate.duration)
    t.is(res.body.emphasis, asanaToCreate.emphasis)
    t.is(res.body.restriction, asanaToCreate.restriction)
    t.deepEqual(res.body.levels, asanaToCreate.levels)
    t.is(res.body.canBeFollowedBy, asanaToCreate.canBeFollowedBy)
    t.is(res.body.pic, asanaToCreate.pic)
})

test('Fetch asana', async t => {
t.plan(2)
    const asanaToCreate = {
    nameEnglish: 'Standing Forward Bend',
    nameSanskrit: 'Uttanasana',
    duration: 2,
    emphasis: 'forward bend',
    restriction: 'placeholder',
    levels: [1],
    canBeFollowedBy: 'placeholder',
    pic: 'placeholder'
    }

    const asanaCreated = (await request(app)
    .post('/asana')
    .send(asanaToCreate)).body

    const fetchedAsana = await request(app).get(`/asana/${asanaCreated._id}`)
    const asanaFetchedJson = fetchedAsana.body

    t.is(fetchedAsana.status, 200)
    t.deepEqual(asanaFetchedJson, asanaCreated)
})

test('Delete an asana', async t => {
t.plan(3)
    const asanaToCreate = {
    nameEnglish: 'Tree Pose',
    nameSanskrit: 'Vriksasana',
    duration: 5,
    emphasis: 'balance',
    restriction: 'placeholder',
    levels: [1, 2, 3, 4],
    canBeFollowedBy: 'placeholder',
    pic: 'placeholder'
    }

    const asanaToDelete = (await request(app)
    .post('/asana')
    .send(asanaToCreate)).body

    const DeleteRes = await request(app).delete(`/asana/${asanaToDelete._id}`)
    t.is(DeleteRes.status, 200)
    t.is(DeleteRes.ok, true)

    const fetch = await request(app).get(`/asana/${asanaToDelete._id}`)
    t.is(fetch.status, 404)
})

test('Fetch all asanas', async t => {
t.plan(4)
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

    const asanaCreated = await request(app)
    .post('/asana')
    .send(asanaToCreate)

    const fetchAll = await request(app)
    .get('/asana/all')

    t.is(fetchAll.status, 200)

    const fetchAllJson = await request(app)
    .get('/asana/all/json')

    t.is(fetchAllJson.status, 200)
    t.true(Array.isArray(fetchAllJson.body))
    t.true(fetchAllJson.body.length > 0)
})

test('Find asanas by emphasis', async t => {
    t.plan(2)
        const asanaToCreate = {
        nameEnglish: 'Test',
        nameSanskrit: 'test',
        duration: 2,
        emphasis: 'test emphasis',
        restriction: 'placeholder',
        levels: [1, 2],
        canBeFollowedBy: 'placeholder',
        pic: 'placeholder'
        }

    const asanaCreated = (await request(app)
    .post('/asana')
    .send(asanaToCreate)).body

    const fetchedAsanas = (await request(app)
    .get(`/asana/findByEmphasis/${asanaCreated.emphasis}`)).body

    t.is(fetchedAsanas.length, 1)
    t.is(fetchedAsanas[0].emphasis, 'test emphasis')

    })
    