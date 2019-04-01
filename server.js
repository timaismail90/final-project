
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


app.post("/upload", function (req,res){
    upload(req, res, (err) => {
        if(!err){
            getLabels.vR(`./public/uploads/${req.file.originalname}`)
           return res.sendStatus(200).end();
        }
     })
})



app.listen(port);

console.log('App is listening on port ' + port);
