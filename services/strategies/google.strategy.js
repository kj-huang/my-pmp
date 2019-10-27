let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;
let passportModel = require('../../dao/passport-strategy');

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
      },
      async function(accessToken, refreshToken, profile, done) {
        let result = await passportModel.GoogleLogin(profile.id);
        
        if(result.length === 0){
            let r = await passportModel.CreateUser(profile.id);
            done(null, r);
        } else {
            done(null, result);
        }

      }
    ));
}