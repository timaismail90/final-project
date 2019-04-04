exports.seed = function(knex, Promise) {
  return knex('influencer').del()
    .then(function () {
      return Promise.all([
        knex('influencer').insert(
          {
            id: 1, 
            name: 'basma_k',
            profile_photo: "https://scontent-yyz1-1.cdninstagram.com/vp/a7ff95d87b59e1c93cdb9aa02ee1175c/5D2F5D8D/t51.2885-19/s320x320/50523487_674135256334742_4275343199582552064_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com",
            influencer_photos: "http://myspice.tv/site/wp-content/uploads/2017/06/ramadannn.jpg ,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ghkFDHegLUOnCxJe0BL_2NSjNp4AZAc2G4nWpTxWLTc8QF_R7Q"
          }),
      ]);
    });
};
