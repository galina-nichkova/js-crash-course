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