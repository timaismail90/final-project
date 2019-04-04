exports.up = function(knex, Promise) {
    return knex.schema.createTable('photographer', function (table) {
      table.increments('id').unasigned().primary();
      table.string('name');
      table.string('unsplash_API');
      table.bigInteger('requests_id').references('requests.id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('photographer');
  };
