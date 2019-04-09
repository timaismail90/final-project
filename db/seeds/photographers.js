
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photographer').del()
    .then(function () {
      // Inserts seed entries
      return knex('photographer').insert([
        {
          id: 1,
          name: 'heftiba',
          unsplashAPI: "https://api.unsplash.com/users/heftiba/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic:"https://images.unsplash.com/profile-1510932839800-fa28425a0bc5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit",
          username:'heftiba',
          type: 'photographer'
        },
        {
          id: 2,
           name: 'brenda Godinez',
          unsplashAPI: "https://api.unsplash.com/users/cravethebenefits/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic:"https://images.unsplash.com/profile-1490323661174-682bfb6ce36d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit",
          username: 'cravethebenefits',
          type: 'photographer'
        },
        {
          id: 3,
          name: 'Edgar Castrejon',
          unsplashAPI:"https://api.unsplash.com/users/edgarraw/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic:"https://images.unsplash.com/profile-1511689084658-01d41b7772ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit",
          username: 'edgarraw',
          type: 'photographer'
        },
        { id: 4,
          name: 'Faisal Khalid',
          unsplashAPI:"https://api.unsplash.com/users/iamfbk/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic: "https://images.unsplash.com/photo-1481740586420-804cc4418700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit",
          username: 'iamfbk',
          type: 'photographer'
        },
        { id:5,
          name:'Nathan Dumlao',
          unsplashAPI:"https://api.unsplash.com/users/nate_dumlao/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic:"https://images.unsplash.com/profile-1495427732560-fe5248ad6638?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit",
          username: 'nate_dumlao',
          type: 'photographer'
        },
        {
          id: 6,
          name: 'Priscilla Du Preezs',
          unsplashAPI:"https://api.unsplash.com/users/priscilladupreez/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic: "https://images.unsplash.com/photo-1550433880-9772bc077291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit",
          username: "priscilladupreez",
          type: 'photographer'
        },
        {
          id: 7,
          name: 'joe robles',
          unsplashAPI:"https://api.unsplash.com/users/joerobles/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          profilepic:"https://images.unsplash.com/profile-fb-1520498473-aaf136c6e369.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit",
          username: 'joerobles',
          type: 'photographer'
        },
        // {
        //   id: 8,
        //   name: '',
        //   unsplash_API:''

        // }


      ]);
    });
};