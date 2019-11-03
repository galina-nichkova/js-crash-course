const BaseService = require('./base-service')
const AsanaModel = require('../models/asana')

class AsanaService extends BaseService {
    constructor() {
        super(AsanaModel, `${__dirname}/../asana-database.json`)
    }
}

module.exports = new AsanaService()