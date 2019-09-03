let express = require('express');
let router = express.Router();
let data = require('../data/pmp');

router.get('/', function (req, res, next) {
  res.render("index",{knowledges: [data[0]]});
});

router.get('/data', function (req, res, next) {
  res.json(data);
});

module.exports = router;