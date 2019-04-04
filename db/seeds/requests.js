
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {
          id: 1,
           photographer_id: '1',
           influencer_id: '1'
          },
      ]);
    });
};
