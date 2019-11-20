const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    password: String,
    level: Number,
    requestedSequence: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Sequence',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

StudentSchema.plugin(require('mongoose-autopopulate'))

const StudentModel = mongoose.model('Student', StudentSchema)
module.exports = StudentModel

/* const Sequence = require('./sequence.js')
const Asana = require('./asana.js')

module.exports = class Student{
    constructor(name, level, requestedSequence = [], id){
        this.name = name
        this.level = level
        this.requestedSequence = requestedSequence
        this.id = id
    console.log('Hi, I am created, my name is ' + name + 
        ' and I practice ' + level + ' yoga.')
    }

    static create ({name, level, requestedSequence, id}){
        return new Student (name, level, requestedSequence, id)
    }
} */