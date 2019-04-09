exports.seed = function(knex, Promise) {
  return knex('influencer').del()
    .then(function () {
      return Promise.all([
        knex('influencer').insert(
          {
            id: 1, 
            name: 'Eloise Ambursley',
            username: 'e_ambursley',
            type: 'influencer',
            unsplashAPI: "https://api.unsplash.com/users/e_ambursley/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            profilepic:'https://images.unsplash.com/profile-1549040189521-cc9f4ba4f3f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit&h=128&w=128'
          }),
      ]);
    });
};