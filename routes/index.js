let express = require('express');
let router = express.Router();
let data = require('../data/pmp');
let answer = require('../data/answer');
let documents = require('../data/documents');
let passport = require('passport');

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
    if(count < 9 && q.selections.length < 9 && q.selections.find(e => e.name === d) === undefined){
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

router.get('/auth/google',
  passport.authenticate('google', { scope: ['email'] }));
 
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;