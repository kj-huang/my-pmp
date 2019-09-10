let express = require('express');
let router = express.Router();
let data = require('../data/pmp');
let freq = require('../data/freq');

router.get('/', function (req, res, next) {
  res.render("index",{knowledges: [data[0]]});
});

router.get('/home', function (req, res, next) {
  res.render("home");
});

router.get('/abbreviation', function (req, res, next) {
  res.render("abbreviation");
});

router.get('/abbreviation', function (req, res, next) {
  res.render("abbreviation");
});

router.get('/data', function (req, res, next) {
  res.render('freq', freq);
});

router.get('/freq', function (req, res, next) {
  res.json(freq);
});

module.exports = router;