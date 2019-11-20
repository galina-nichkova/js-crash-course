const mongoose = require('mongoose')

const AsanaSchema = new mongoose.Schema({
    nameEnglish: String,
    nameSanskrit: String,
    duration: Number,
    emphasis: String,
    restriction: String,
    levels: Array,
    canBeFollowedBy: String, //placeholder, should be reference to asana itself,
    pic: String
})

const AsanaModel = mongoose.model('Asana', AsanaSchema)
module.exports = AsanaModel