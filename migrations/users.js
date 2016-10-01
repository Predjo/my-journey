
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable('users', function(table) {
        table.increments('id').primary();
        table.string('firstName');
        table.string('lastName');
        table.string('emailAddress');
      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .dropTable('users')
  ]);
};