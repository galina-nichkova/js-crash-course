const SequenceService = require('./sequence-service')
const StudentService = require('./student-service')
const AsanaService = require('./asana-service')

class SequenceCreationService {

    async appendAsanas(duration, sequence) {
        var seqDuration
        const allAsanas = await AsanaService.findAll()

        seqDuration = 0
        var i = 0
        while (seqDuration < duration && i < allAsanas.length) {
                seqDuration = seqDuration + allAsanas[i].duration
                await SequenceService.addAsanaToSequence(allAsanas[i], sequence)
                i++
        }
        return sequence
    }

    async requestSequence(req) {
//create new empty sequence with level, duration, emphasis
        const newSeq = await SequenceService.add(req.sequence)

//loop through asanas until duration is reached 
//push every matching asana to the new sequence
        const updatedSeq = await this.appendAsanas(req.sequence.duration, newSeq)

//update student (if it exists)
        await StudentService.addSequenceToStudentByStudentId (updatedSeq, req.student)      

//create and update student if it doesn't exist
//...
        return {sequence: updatedSeq}
    }
}

module.exports = new SequenceCreationService()