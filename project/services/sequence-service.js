const BaseService = require('./base-service')
const SequenceModel = require('../models/sequence')

class SequenceService extends BaseService {
    constructor() {
        super(SequenceModel, `${__dirname}/../sequence-database.json`)
    }
}

module.exports = new SequenceService()