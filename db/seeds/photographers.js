
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photographer').del()
    .then(function () {
      // Inserts seed entries
      return knex('photographer').insert([
        {
          id: 1, name: 'vv',
          profile_photo: 'cc',
          photo_id: '',
          requests_id: ""
        },
        {
          id: 2, 
          name: 'vv',
          profile_photo: 'cc',
          photo_id: '',
          requests_id: ""
        },
        {
          id: 3, 
          name: 'vv',
          profile_photo: 'cc',
          photo_id: '',
          requests_id: ""
        },
        {
          id: 1, name: 'vv',
          profile_photo: 'cc',
          photo_id: '',
          requests_id: ""
        },

{
          id: 4,
           name: 'vv',
          profile_photo: 'cc',
          photo_id: '',
          requests_id: ""
        },

        {
          id: 5, 
          name: 'vv',
          profile_photo: 'cc',
          photo_id: '',
          requests_id: ""
        },

        
      ]);
    });
};


