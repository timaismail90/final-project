
exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencers', function (table) {
        table.increments('id').unsigned().primary();
        table.string('name');
        table.string('city');
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('influencers');
  
};

