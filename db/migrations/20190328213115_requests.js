
exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests', function(table){
        table.increments('id').unsigned().primary();
        table.bigInteger('photographers_id').references('photographers.id');
        table.bigInteger('influencers_id').references('influencers.id')

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
  
};
