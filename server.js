
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
               (labels) => {
                   res.send(labels)
               })
        }
     })
})
app.get("/:id/photographer", function(req,res){
   console.log(req.params.id)
   res.sendStatus(200)
   // client.search({  
   //    index: 'photographers',
   //    type: 'user',
   //    body: {
   //      query: {
   //        match: { "id": req.params.id }
   //      },
   //    }
   //  },function (error, response,status) {
   //      if (error){
   //        console.log("search error: "+error)
   //      }
   //      else {
   //        console.log("--- Response ---");
   //        console.log(response);
   //        console.log("--- Hits ---");
   //        response.hits.hits.forEach(function(hit){
   //          res.json(hit["_source"])
   //        })
   //      }
   //  });

})


app.listen(port);

console.log('App is listening on port ' + port);
