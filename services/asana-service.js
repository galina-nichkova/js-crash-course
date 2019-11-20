const BaseService = require('./base-service')
const AsanaModel = require('../models/asana')

class AsanaService extends BaseService {
    model = AsanaModel
    }

module.exports = new AsanaService()