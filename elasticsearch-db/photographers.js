
var client = require('./connections.js');
var inputfile = require("./photo.json");
var bulk = [];

var makebulk = function(photographersList,callback){
  for (var photographer in photographersList){
    bulk.push(
      { index: {_index: 'photographers', _type: 'user', _id: photographersList[photographer].id } },
      {
        'name':photographersList[photographer].name,
        'keyWords':photographersList[photographer].keyWords,
        'location':photographersList[photographer].location,
        'profilePhoto':photographersList[photographer].profilePhoto,
        'username':photographersList[photographer].username,
        'unsplashApi':photographersList[photographer].unsplashApi
       
      }
    );
  }
  callback(bulk);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 8,
    index: 'photographers',
    type: 'user',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(JSON.stringify(response));
  })
});