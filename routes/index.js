var express = require('express');
var router = express.Router();

const c = require("../src/method/crawl");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Crawler' });
});

router.post('/', function(req, res, next) {
  const url = req.body.url;

  console.log("url to crawl", url);

  const info = c(url);

  res.status(200).send({data: url, info});
});

module.exports = router;
