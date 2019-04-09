exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencer', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name');
      table.string('username');
      table.string('unsplashAPI');
      table.string('profilepic');
      table.string('type')
      table.string('bio');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('influencer');
  };
