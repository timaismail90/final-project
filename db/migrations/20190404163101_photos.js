exports.up = function(knex, Promise) {
    return knex.schema.createTable('photos', function (table) {
      table.increments('id').unasigned().primary();
      table.string('portforlio');
      table.bigInteger('photographer_id').references('photographer.id');
      table.bigInteger('requests_id').references('requests.id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('photos');
  };
