const mongoose = require('mongoose')

const SequenceSchema = new mongoose.Schema({
    level: Number, 
    duration: Number,
    emphasis: String,
    asanas: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Asana',
        autopopulate: {
            maxDepth: 1
        } 
    }]

})

SequenceSchema.plugin(require('mongoose-autopopulate'))

const SequenceModel = mongoose.model('Sequence', SequenceSchema)
module.exports = SequenceModel