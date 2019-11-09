const Student = require('./models/student')
const Sequence = require('./models/sequence')
const Asana = require('./models/asana')

const StudentService = require('./services/student-service')
const SequenceService = require('./services/sequence-service')
const AsanaService = require('./services/asana-service')
// const sqlite3 = require('sqlite3')

async function main() {
  const bigToePose = new Asana ('Big Toe Pose','Padanghustasana',2,'forward bend', ['easy', 'difficult'])
  const chairPose = new Asana ('Chair Pose','Utkatasana',3,'hips', ['intermediate'])
  const downwardFacingDog = new Asana ('Downward Facing Dog','Adho Mukha Svanasana',3,'forward bend', ['easy', 'intermediate', 'difficult'])

  const galina = new Student ('Galina', 'intermediate')

  galina.request(45, 'forward bend')
  galina.requestedSequence[0].addAsana(bigToePose)
  galina.requestedSequence[0].addAsana(downwardFacingDog)

  await AsanaService.add(bigToePose)
  await AsanaService.add(chairPose)
  await AsanaService.add(downwardFacingDog)

  await StudentService.add(galina)

  const savedAsanas = await AsanaService.findAll()
  console.log(savedAsanas)

  await AsanaService.del(1)

  const SavedAsanasNew = await AsanaService.findAll()
  console.log(SavedAsanasNew)
}

main()