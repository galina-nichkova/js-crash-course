const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const StudentSchema = new mongoose.Schema({
    level: Number,
    requestedSequence: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Sequence',
        autopopulate: {
            maxDepth: 1
        }
    }]
}, { strict: false })

StudentSchema.plugin(require('mongoose-autopopulate'))
StudentSchema.plugin(passportLocalMongoose)

const StudentModel = mongoose.model('Student', StudentSchema)
module.exports = StudentModel