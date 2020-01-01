const BaseService = require('./base-service')
const AsanaModel = require('../models/asana')

class AsanaService extends BaseService {
    model = AsanaModel

    async findAsanasByEmphasis(emphasis) {
        return this.model.find({emphasis: emphasis})
    }
}
module.exports = new AsanaService()