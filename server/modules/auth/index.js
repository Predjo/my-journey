
const requireAll   = require('server/modules/utils').requireAll;

exports.routes     = require('./routes');
exports.strategies = requireAll(__dirname + '/strategies');
