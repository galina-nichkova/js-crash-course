const BaseService = require('./base-service')
const SequenceService = require('./sequence-service')

class MainService {
    async main(req) {
        const newSeq = SequenceService.add(req)
        return newSeq
    }
//create new empty sequence with level, duration, emphasis

//loop through asanas until duration is reached 

    //push every matching asana to the new sequence

//update student
}

module.exports = new MainService()