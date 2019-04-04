// 1. photographer Migration:

exports.up = function(knex, Promise) {
    return knex.schema.createTable('photographer', function (table) {
      table.increments('id').unasigned().primary();
      table.string('name');
      table.string('unsplash_API');
      table.string('username');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('photographer');
  };

  //photographer seed:

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
            usernam:'heftiba'
          },
          {
            id: 2,
             name: 'brenda Godinez',
            unsplash_API: "https://api.unsplash.com/users/cravethebenefits/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            username: 'cravethebenefits'
          },
          {
            id: 3, 
            name: 'Edgar Castrejon',
            unsplash_API:"https://api.unsplash.com/users/edgarraw/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8", 
            username: 'edgarraw'
          },
          { id: 4,
            name: 'Faisal Khalid',
            unsplash_API:"https://api.unsplash.com/users/iamfbk/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            username: 'iamfbk'
          },
          { id:5,
            name:'Nathan Dumlao',
            unsplash_API:"https://api.unsplash.com/users/nate_dumlao/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            username: 'nate_dumlao'
          },
          {
            id: 6,
            name: 'Priscilla Du Preezs',
            unsplash_API:"https://api.unsplash.com/users/priscilladupreez/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            username: "priscilladupreez"
          },
          {
            id: 7,
            name: 'joe robles',
            unsplash_API:"https://api.unsplash.com/users/joerobles/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8",
            usename: 'joerobles'
          },
          // {
          //   id: 8,
          //   name: '',
          //   unsplash_API:''
  
          // }
  
          
        ]);
      });
  };

  //influencer migration:
  exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencer', function (table) {
      table.increments('id').unasigned().primary();
      table.string('name');
      table.string('username');
      table.string('unsplashAPI');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('influencer');
  };

  //influencer seed:
  exports.seed = function(knex, Promise) {
    return knex('influencer').del()
      .then(function () {
        return Promise.all([
          knex('influencer').insert(
            {
              id: 1, 
              name: 'Eloise Ambursley',
              username: 'e_ambursley',
              unsplashAPI: "https://api.unsplash.com/users/e_ambursley/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8"
            }),
        ]);
      });
  };

  //requests migration:
  exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests', function (table) {
      table.increments('id').unasigned().primary();
      table.bigInteger('photographer_id').references('photographer.id');
      table.bigInteger('influencer_id').references('influencer.id')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
  };
// requests seed:

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
  


