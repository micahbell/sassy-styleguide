var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/styleguide', function(req, res, next) {
  res.render('styleguide');
});

router.get('/', function(req, res, next) {
  res.redirect('/styleguide');
});

module.exports = router;
