'use strict';

module.exports = {
  host  : 'localhost',
  port  : 3000,
  https : false,

  db : {
    client: 'mysql',
    connection: {
      database : 'my_journey',
      user     : 'root',
      password : 'root',
      host     : '127.0.0.1',
      charset  : 'utf8'
    },
    
    pool: {
      min: 2,
      max: 10
    },
    
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  auth : {
    secret : 'myYournej1989'
  }
}