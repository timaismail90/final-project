var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
require('dotenv').config();
var visualRecognition = new VisualRecognitionV3({  
  url: process.env.VISUAL_RECOGNITION_URL,
  version:'2018-03-19',
  iam_apikey:process.env.VISUAL_RECOGNITION_APIKEY,
})

var visualRecognition = new VisualRecognitionV3({  
  url: process.env.VISUAL_RECOGNITION_URL,
  version:'2018-03-19',
  iam_apikey:process.env.VISUAL_RECOGNITION_APIKEY,
})


module.exports = function () {
  return {
    vR: (image, completion) => {
      var labels = ""
      return visualRecognition.classify(
               {images_file: fs.createReadStream(image)}, 
               function(err, res) {
                if (err) {
                  console.log(err);
                } else {
                  res.images[0].classifiers[0].classes
                    .forEach(obj => labels+=obj.class+" ");
                   completion(labels)
                }
              })
    }
  }

}

 
   
