let express = require('express');
let router = express.Router();
let data = require('../data/pmp');

router.get('/', function (req, res, next) {
  data = data.sort( () => Math.random() - 0.5)
  console.log(data[0])
  res.render("index",{knowledges: [data[0]]});
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = router;