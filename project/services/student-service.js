const BaseService = require('./base-service')
const StudentModel = require('../models/student')
const Sequence = require('../models/sequence')
const SequenceService = require('./sequence-service')

class StudentService extends BaseService {
    constructor() {
        super(StudentModel, `${__dirname}/../student-database.json`)
    }

    async requestSeq(student, duration, emphasis){
        try {const newSequence = await new Sequence(student.level, duration, 
            emphasis)
        await console.log(newSequence)
        await SequenceService.add(newSequence)
        await student.requestedSequence.push(newSequence.id)
        await this.update(student)
    } catch(err) {
        console.log(err.message)
    }
    }
}

module.exports = new StudentService()