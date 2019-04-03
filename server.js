const client = require('./elasticsearch-db/connections.js');

const getLabels= require('./watson.js')()
const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,file.originalname);
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");



app.post("/upload",function (req,res){
    upload(req, res, async (err) => {
        if(!err){
            await getLabels.vR(`./public/uploads/${req.file.originalname}`,
               async (labels) => {
                  console.log(labels)
                 await client.search({  
                       index: 'photographers',
                       type: 'user',
                       body: {
                         query: {
                           match: { "keyWords": labels }
                         },
                       }
                     },function (error, response,status) {
                         if (error){
                           console.log("search error: "+error)
                         }
                         else {
                           console.log("--- Hits ---");
                          var array =[];
                          var average = 0
                           response.hits.hits.forEach(function(hit,i){
         
                              if( hit["_score"]> 2){
                              array.push(hit["_source"])
                           }
                           })
                           res.send(array)
                         }
                     });
               })
        }
     })
})


app.get("/:id/photographer", function(req,res){
   client.search({  
      index: 'photographers',
      type: 'user',
      body: {
        query: {
          match: { "_id": req.params.id }
        },
      }
    },function (error, response,status) {
        if (error){
          console.log("search error: "+error)
        }
        else {
            res.json(response.hits.hits[0])
        }
    });

})


app.listen(port);

console.log('App is listening on port ' + port);
