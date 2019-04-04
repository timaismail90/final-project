exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencer', function (table) {
      table.increments('id').unasigned().primary();
      table.string('name');
      table.string('profile_photo');
      table.bigInteger('requests_id').references('requests.id');
      table.string('influencer_photos');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('influencer');
  };
