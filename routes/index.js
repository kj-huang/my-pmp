let express = require('express');
let router = express.Router();
let data = require('../data/pmp');

router.get('/', function (req, res, next) {
  res.render("index",{knowledges: [data[0]]});
});

router.get('/data', function (req, res, next) {
  res.json(data);
});

router.get('/question', function (req, res, next) {
  let question = [
    {"id": 1, "question": "What is the output of 發展專案章程","selections": [
      {"name": "專案章程", "answer": true},
      {"name": "假設紀錄", "answer": true},
      {"name": "專案管理計劃書", "answer": false},
      {"name": "商業企劃案", "answer": false},
      {"name": "變更申請", "answer": false}
      ]}
  ]

  
  res.render("five_question", {question: question});
});


module.exports = router;