
const bookshelf = require('../db');

const User = bookshelf.Model.extend({
  tableName : 'users',
});

module.exports = User;
