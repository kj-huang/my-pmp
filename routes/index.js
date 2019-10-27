let express = require('express');
let router = express.Router();
let data = require('../data/pmp');
let answer = require('../data/answer');
let documents = require('../data/documents');

router.get('/', function (req, res, next) {
  res.render("index",{knowledges: [data[0]]});
});

router.get('/data', function (req, res, next) {
  res.json(data);
});

router.get('/question', function (req, res, next) {
  let q = answer.sort( () => Math.random() - 0.5)[0];
  
  //shuffle
  documents.sort( () => Math.random() - 0.5);

  let count = 0;
  documents.forEach((d) => {
    if(count < 7 && q.selections.length < 7 && q.selections.name !== d){
      let o = {};
      o.name = d;
      o.answer = false;
      q.selections.push(o)
    }
  })

  q.selections.sort( () => Math.random() - 0.5);


  
  let question = [q]
  
  res.render("five_question", {question: question});
});


module.exports = router;