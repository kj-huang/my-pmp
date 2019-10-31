const db = require('../db/database');
let model = {};

model.save = function(user_id, selected_ans, wrong_ans){
    return db('result_logs').insert({user_id: user_id, selected_ans: selected_ans, wrong_ans: wrong_ans});
}

module.exports = model;