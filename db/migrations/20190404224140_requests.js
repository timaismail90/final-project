exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests', function (table) {
      table.increments('id').unsigned().primary();
      table.bigInteger('photographer_id').references('photographer.id');
      table.bigInteger('influencer_id').references('influencer.id')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
  };