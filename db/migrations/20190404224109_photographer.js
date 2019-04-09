
exports.up = function(knex, Promise) {
    return knex.schema.createTable('photographer', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name');
      table.string('unsplashAPI');
      table.string('username');
      table.string('profilepic');
      table.string('type'),
      table.string('bio')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('photographer');
  };