var client = require('./connections.js');

client.index({  
  index: 'user',
  id: '1',
  type: 'influencer',
  body: {
   "name":"Halimo",
   "id": 1,
   "location": "toronto"
  }
},function(err,resp,status) {
    console.log(resp);
});