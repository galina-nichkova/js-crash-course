const SequenceService = require('./sequence-service')
const StudentService = require('./student-service')
const AsanaService = require('./asana-service')
const AsanaModel = require('../models/asana')

class SequenceCreationService {

    async appendAsanas(duration, sequence) {
        var seqDuration
        const allAsanas = await AsanaService.findAsanasByEmphasis(sequence.emphasis)

        const sunSalutationList = await AsanaService.findAsanaByEnglishName('Sun Salutation')
        const sunSalutation = sunSalutationList[0]
        const corpsePoseList = await AsanaService.findAsanaByEnglishName('Corpse Pose')
        const corpsePose = corpsePoseList[0]

        await SequenceService.addAsanaToSequence(sunSalutation, sequence)

        seqDuration = 0
        var i = 0
        while (seqDuration < duration-15 && i < allAsanas.length) {
                seqDuration = seqDuration + allAsanas[i].duration
                await SequenceService.addAsanaToSequence(allAsanas[i], sequence)
                i++
        }

        await SequenceService.addAsanaToSequence(corpsePose, sequence)

        return sequence
    }

    async requestSequence(req) {
//create new empty sequence with level, duration, emphasis
        const newSeq = await SequenceService.add(req.sequence)

//loop through asanas until duration is reached 
//push every matching asana to the new sequence
        const updatedSeq = await this.appendAsanas(req.sequence.duration, newSeq)

//update student (if it exists)
        await StudentService.addSequenceToStudentByStudentId (updatedSeq, req.studentId)      

//create and update student if it doesn't exist
//...
        return {sequence: updatedSeq}
    }
}

module.exports = new SequenceCreationService()