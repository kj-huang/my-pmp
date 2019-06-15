let express = require('express');
let router = express.Router();
let data = require('../data/pmp');

router.get('/', function (req, res, next) {
  res.render("index",{knowledges: data});
});

module.exports = router;