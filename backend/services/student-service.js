const BaseService = require('./base-service')
const StudentModel = require('../models/student')

class StudentService extends BaseService {
    model = StudentModel

    async addSequenceToStudentByStudentId(sequence, studentId) {
        const student = await this.find(studentId)
        await student.requestedSequence.push(sequence)
        await student.save()

     }
    
    async updateStudentLevelbyStudentId(level, studentId) {
        const student = await this.find(studentId)
        student.level = level
        await student.save()
        return student
    }

    }

module.exports = new StudentService()