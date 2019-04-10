var elasticsearch=require('elasticsearch');

require('dotenv').config({path:"/Users/halimoghelle/lighthouse/final-project/.env"});
var client=new elasticsearch.Client( {
  hosts: [process.env.DB_PATHONE, process.env.DB_PATHTWO]
});
module.exports = client;
 