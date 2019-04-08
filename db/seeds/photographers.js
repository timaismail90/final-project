
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
          username:'heftiba',
          type: 'photographer'
        },
        {
          id: 2,
           name: 'brenda Godinez',
          unsplashAPI: "https://api.unsplash.com/users/cravethebenefits/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: 'cravethebenefits',
          type: 'photographer'
        },
        {
          id: 3, 
          name: 'Edgar Castrejon',
          unsplashAPI:"https://api.unsplash.com/users/edgarraw/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8", 
          username: 'edgarraw',
          type: 'photographer'
        },
        { id: 4,
          name: 'Faisal Khalid',
          unsplashAPI:"https://api.unsplash.com/users/iamfbk/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: 'iamfbk',
          type: 'photographer'
        },
        { id:5,
          name:'Nathan Dumlao',
          unsplashAPI:"https://api.unsplash.com/users/nate_dumlao/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: 'nate_dumlao',
          type: 'photographer'
        },
        {
          id: 6,
          name: 'Priscilla Du Preezs',
          unsplashAPI:"https://api.unsplash.com/users/priscilladupreez/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: "priscilladupreez",
          type: 'photographer'
        },
        {
          id: 7,
          name: 'joe robles',
          unsplashAPI:"https://api.unsplash.com/users/joerobles/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
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