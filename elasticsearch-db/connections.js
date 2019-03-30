var elasticsearch=require('elasticsearch');

var client=new elasticsearch.Client( {
  hosts: [
   'https://timaismail:lighthouseLabs@portal3474-4.final-project.1031860671.composedb.com:33005/',
   'https://timaismail:lighthouseLabs@portal3474-4.final-project.1031860671.composedb.com:33005/',

  ]
});
module.exports = client;