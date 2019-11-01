const db = require('../db/database');
let model = {};

model.save = function(user_id, question, selected_ans, wrong_ans, ans){
    return db('result_logs').insert({user_id: user_id, question: question, selected_ans: selected_ans, wrong_ans: wrong_ans, ans: ans});
}

model.get = function(user_id){
    return db('result_logs').where('user_id', user_id);
}


module.exports = model;