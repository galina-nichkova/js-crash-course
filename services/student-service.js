const BaseService = require('./base-service')
const StudentModel = require('../models/student')

class StudentService extends BaseService {
    model = StudentModel
    }

module.exports = new StudentService()