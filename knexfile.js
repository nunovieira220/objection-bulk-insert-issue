const config = require('config');

exports.development = exports.production = exports.test = config.get('database');