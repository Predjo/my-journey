
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('password');
        table.string('avatarUrl');

        table.string('facebookId');
        table.string('facebookToken');

        table.string('twitterId');
        table.string('twitterToken');

        table.string('googleId');
        table.string('googleToken');

      })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema
      .dropTable('users')
  ]);
};
