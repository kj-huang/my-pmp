let db = require('../db/database');
let model = {};

model.GoogleLogin = function(googleId) {
	return db('user').where('google_id', '=', googleId);
}

model.CreateUser = function(googleId) {
	return db('user').returning(['user_id', 'google_id']).insert({google_id: googleId})
}

module.exports = model;
