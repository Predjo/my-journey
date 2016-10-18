
const Config    = require(global.__base + '/config');
const knex      = require('knex')(Config.db);

const bookshelf = require('bookshelf')(knex);

module.exports  = bookshelf;