
const requireAll   = require('../utils').requireAll;

exports.routes     = require('./routes');
exports.strategies = requireAll(__dirname + '/strategies');
