exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('influencer').del()
    .then(function () {
      // Inserts seed entries
      return knex('influencer').insert([
        {
          id: 1, 
          name: 'Eloise Ambursley',
          username: 'ember',
          type: 'influencer',
          unsplashAPI: "https://api.unsplash.com/users/e_ambursley/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic:'https://images.unsplash.com/profile-1549040189521-cc9f4ba4f3f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit&h=128&w=128',
          bio: ' A cat mom, Software Engineer, and fashion blogger. Love all things beautiful. Connect with me to collaborate'

        },

        {   id: 2, 
            name: 'Dani Bayuni',
            username: 'dani123',
            type: 'influencer',
            unsplashAPI: "https://api.unsplash.com/users/danibayuni/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            profilepic:'https://images.unsplash.com/photo-1551772610-7a49996cd2c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            bio: ' Lifestyle vlogger with a passion for nature'

        
        },
        
        // {
        //   id: 8,
        //   name: '',
        //   unsplash_API:''

        // }


      ]);
    });
};