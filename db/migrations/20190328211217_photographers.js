
exports.up = function(knex, Promise) {
    knex.schema.CreateTable('photographers', function (table) {
        table.increment('id').unsigned().primary();
        table.string('name');
        table.json('profile');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('photographers');
};
 