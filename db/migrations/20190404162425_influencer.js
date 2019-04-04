exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencer', function (table) {
      table.increments('id').unasigned().primary();
      table.string('name');
      table.string('username');
      table.bigInteger('requests_id').references('requests.id');
      table.string('unsplashAPI');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('influencer');
  };
