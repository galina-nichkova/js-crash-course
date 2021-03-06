const BaseService = require('./base-service')
const SequenceModel = require('../models/sequence')

class SequenceService extends BaseService {
    model = SequenceModel

    async requestSeq(student, duration, emphasis) {
        const newSequence = await this.add({
            level: student.level, duration: duration,
            emphasis: emphasis
        })
        await student.requestedSequence.push(newSequence)
        await student.save()
    }

    async addAsanaToSequence(asana, sequence) {
        await sequence.asanas.push(asana)
        await sequence.save()
     }
}

module.exports = new SequenceService()