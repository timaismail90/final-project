exports.seed = function(knex, Promise) {
    return knex('requests').del()
      .then(function () {
        return Promise.all([
          knex('requests').insert(
            {
              photographer_id: 7,
              influencer_id: 1
            }),
        ]);
      });
  };