var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET projects page */
router.get('/projects'), function(req,res,next) {
  res.render('projets');
}

module.exports = router;
