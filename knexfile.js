
const Config = require('./config');

module.exports = {

  development : Config.db,
  staging     : Config.db,
  production  : Config.db

};
