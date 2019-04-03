var client = require('./connections.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

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

  // client.search({  
  //   index: 'photographers',
  //   type: 'user',
  //   body: {
  //     query: {
  //       match: { "id": 1 }
  //     },
  //   }
  // },function (error, response,status) {
  //     if (error){
  //       console.log("search error: "+error)
  //     }
  //     else {
  //       console.log("--- Response ---");
  //       console.log(response);
  //       console.log("--- Hits ---");
  //       response.hits.hits.forEach(function(hit){
  //         console.log(hit["_source"].name);
  //       })
  //     }
  // });


// ping the client to be sure Elasticsearch is up
client.ping({
     requestTimeout: 30000,
 }, function(error) {
 // at this point, eastic search is down, please check your Elasticsearch service
     if (error) {
         console.error('Elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });