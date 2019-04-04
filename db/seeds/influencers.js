exports.seed = function(knex, Promise) {
  return knex('influencer').del()
    .then(function () {
      return Promise.all([
        knex('influencer').insert({id: 1, name: 'Alice'}),
      ]);
    });
};
