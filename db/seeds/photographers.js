
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photographers').del()
    .then(function () {
      // Inserts seed entries
      return knex('photographers').insert([
        {id: 1, name: 'ali', profile_image:'', location: 'Vernice Beach, CA',portfolio: ''},
        {id: 2, name: 'calicado',profile_image:'', location: 'Vernice Beach, CA',portfolio: '' },
        {id: 3, name: 'hustwilson', profile_image:'', location: 'Vernice Beach, CA',portfolio: '' }
      ]);
    });
};
table.increment('id').unsigned().primary();
table.string('name');
table.json('profile');