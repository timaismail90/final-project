
exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencers', function (table) {
        table.increments('id').unsigned().primary();
        table.string('name');
        table.string('city');
        table.string('profilePhoto');
        table.string('igLink');
        table.bigInteger('requests_id').references('requests.id');
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('influencers');
  
};

