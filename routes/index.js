var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {threshold: 85});
});


router.get('/post', function(req, res, next) {
  image_url = req.param('url');
  threshold = req.param('threshold');

  var url = 'https://m3fgod2lea.execute-api.eu-central-1.amazonaws.com/prod/query-one?url='+image_url+'&threshold='+threshold;
  console.log(url);
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.render('index', { target: image_url, threshold: threshold, suspects: JSON.parse(body).suspects });
    }
  })

  
});

module.exports = router;
