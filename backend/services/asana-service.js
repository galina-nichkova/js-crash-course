const BaseService = require('./base-service')
const AsanaModel = require('../models/asana')

class AsanaService extends BaseService {
    model = AsanaModel

    async findAsanasByEmphasis(emphasis) {
        return this.model.find({emphasis: emphasis})
    }

    async findAsanaByEnglishName(name) {
        return this.model.find({nameEnglish: name})
    }
}
module.exports = new AsanaService()