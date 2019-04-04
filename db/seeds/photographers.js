
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photographer').del()
    .then(function () {
      // Inserts seed entries
      return knex('photographer').insert([
        {
          id: 1, 
          name: 'heftiba',
          unsplash_API: '"https://api.unsplash.com/users/heftiba/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",',
          usernam:'heftiba',
          requests_id: ''
        },
        {
          id: 2,
           name: 'brenda Godinez',
          unsplash_API: "https://api.unsplash.com/users/cravethebenefits/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: 'cravethebenefits',
          requests_id: '' 
        },
        {
          id: 3, 
          name: 'Edgar Castrejon',
          unsplash_API:"https://api.unsplash.com/users/edgarraw/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8", 
          username: 'edgarraw',
          requests_id: ''  
        },
        { id: 4,
          name: 'Faisal Khalid',
          unsplash_API:"https://api.unsplash.com/users/iamfbk/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: 'iamfbk',
          requests_id: ''
        },
        { id:5,
          name:'Nathan Dumlao',
          unsplash_API:"https://api.unsplash.com/users/nate_dumlao/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: 'nate_dumlao',
          requests_id:''
        },
        {
          id: 6,
          name: 'Priscilla Du Preezs',
          unsplash_API:"https://api.unsplash.com/users/priscilladupreez/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          username: "priscilladupreez",
          requests_id: ''
        },
        {
          id: 7,
          name: 'joe robles',
          unsplash_API:"https://api.unsplash.com/users/joerobles/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
          usename: 'joerobles',
          requests_id: ''
        },
        // {
        //   id: 8,
        //   name: '',
        //   unsplash_API:''

        // }

        
      ]);
    });
};
