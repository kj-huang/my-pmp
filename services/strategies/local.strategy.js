var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportModel = require('../../dao/passport-strategy');
let Logger = require('../logger');
const logger = Logger.getLogger('login');

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'account',
        passwordField: 'password'
    }, (account, password, done) => {
        passportModel.login(account).then((results) => {
            if (results.length == 0) {
                logger.warn('No this user, login as: ' + account);
                done(null, false);
            }
            else if (results[0].password === password) {
                logger.info('Someone Login');
                const user = {
                    userName: results[0].account,
                    password: results[0].password
                }
                done(null, user);
            }
            else {
                logger.warn('Exist userName, wrong password, login as: ' + account);
                done(null, false, { message: 'Bad password' });
            }
        }).catch((err) => {
            logger.fatal(err);
        });
    }));
};
