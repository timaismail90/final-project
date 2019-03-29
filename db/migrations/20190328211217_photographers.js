
exports.up = function(knex, Promise) {
    knex.schema.CreateTable('photographers', function (table) {
        table.increment('id').unsigned().primary();
        table.string('name');
        table.string('profile_image');
        table.string('location');
        table.string('location');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('photographers');
};
