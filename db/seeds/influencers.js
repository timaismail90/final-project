
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('influencers').del()
    .then(function () {
      // Inserts seed entries
      return knex('influencers').insert([
        {id: 1, name: 'ken', city:'', profilePhoto:'', ig_username:'', requests_id: 1},
        {id: 2, name: 'fatma',city:'', profilePhoto:'', ig_username:'', requests_id: 1},
        {id: 3, name: 'hal',city:'', profilePhoto:'', ig_username:'', requests_id: 0},
      ]);
    });
};

