let express = require('express');
let router = express.Router();
let data = require('../data/pmp');
let answer = require('../data/answer');
let documents = require('../data/documents');
let passport = require('passport');
let result = require('../dao/result_logs');

router.get('/', function (req, res, next) {
  res.render("index",{knowledges: [data[0]]});
});

router.get('/data', function (req, res, next) {
  res.json(data);
});

router.get('/logs', function (req, res, next) {
  result.get(req.user[0].user_id).then((r)=>{

    return res.render("logs", {data: r});
  }).catch(() => {return res.sendStatus(500)})
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

  let question = [q];

  let isLogin = false;
  if(req.user){
    isLogin = true;
  }
  res.render("five_question", {question: question, isLogin: isLogin});
});

router.post('/save_result', function (req, res, next) {
  console.log( req.user)
  let user_id = req.user[0].user_id;
  let question = req.body.question;
  let selected_ans = req.body.selected_ans.filter((d) => d !== "");
  let wrong_ans = req.body.wrong_ans || [];
  let ans = req.body.ans || [];
  console.log(user_id, JSON.stringify(selected_ans), JSON.stringify(wrong_ans))
  result.save(user_id, question, JSON.stringify(selected_ans), JSON.stringify(wrong_ans), JSON.stringify(ans)).then((r) => {  console.log(r); return res.sendStatus(200)}).catch((err) => { console.log(err); return res.sendStatus(500)});
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['email'] }));
 
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/question');
});

module.exports = router;