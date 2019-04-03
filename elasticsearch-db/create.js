var client = require('./connections.js');

// client.indices.create({  
//   index: 'user'
// },function(err,resp,status) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("create",resp);
//   }
// });

client.indices.delete({
  index: 'photographers'
}, function(err, res) {

  if (err) {
      console.error(err.message);
  } else {
      console.log('Indexes have been deleted!');
  }
});
