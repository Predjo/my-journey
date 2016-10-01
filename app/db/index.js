
const Config    = require('../../config');
const knex      = require('knex')(Config.db);

const bookshelf = require('bookshelf')(knex);

module.exports  = bookshelf;