var client = require('./connections.js');

// client.cluster.health({},function(err,resp,status) {  
//   console.log("-- Client Health --",resp);
// });

// client.count({index: 'user',type: 'influencer'},function(err,resp,status) {  
//     console.log("influencer",resp);
//   });

  // client.count({index: 'user',type: 'photographers'},function(err,resp,status) {  
  //   console.log("photographers",resp);
  // });
  
  // client.delete({  
  //   index: 'user',
  //   id: '1',
  //   type: ['photographers', "influencer"]
  // },function(err,resp,status) {
  //     console.log(resp);
  // });

  client.search({  
    index: 'photographers',
    type: 'user',
    body: {
      query: {
        match: { "keyWords": "\bfood|\btree|\beauty" }
      },
    }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit["_source"].name);
        })
      }
  });