
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photographer').del()
    .then(function () {
      // Inserts seed entries
      return knex('photographer').insert([
        {
          id: 1, name: '',
          unsplash_API: '',
          requests_id: ''
        },
        {
          id: 1, name: '',
          unsplash_API: '',
          requests_id: '' 
        },
        {
          id: 1, name: '',
          unsplash_API: '',
          requests_id: ''  
        }
      ]);
    });
};
