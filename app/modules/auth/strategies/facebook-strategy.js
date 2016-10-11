
const _                = require('lodash');
const FacebookStrategy = require('passport-facebook').Strategy;
const configAuth       = require('../config/auth-config');

const User             = require(global.__base + '/app/models/user');

module.exports = new FacebookStrategy({
  clientID          : configAuth.facebookAuth.appID,
  clientSecret      : configAuth.facebookAuth.appSecret,
  callbackURL       : configAuth.facebookAuth.callbackURL,
  profileFields     : ['id', 'email', 'first_name', 'last_name', 'picture'],
  passReqToCallback : true
},
  function(req, token, refreshToken, profile, done) {
    process.nextTick(() => {

      const name      = profile.name.givenName + ' ' + profile.name.familyName;
      const email     = _.get(profile, 'emails[0].value');
      const avatarUrl = _.get(profile, 'photos[0].value');

      User.query({ where : { facebookId : profile.id }, orWhere : { email }})
      .fetch().then( user => {
        
        // There is a user based on facebookId or email
        if (user) {
          
          // First time using facebook to sign in, update user info
          if ( !user.get('facebookId') ) {
            user.save({
              facebookToken : token,
              facebookId    : profile.id,
              name          : user.get('name') || name,
              avatarUrl     : user.get('avatarUrl') || avatarUrl
            }).then( () => done(null, user) ).catch( err => done(err));
          } else {
            done(null, user);
          }
        
        // User doesnt exist, create one
        } else {
          const newUser = new User({
            facebookId    : profile.id,
            facebookToken : token,
            name          : name,
            email         : email,
            avatarUrl     : avatarUrl
          });

          newUser.save().then( () => done(null, newUser) ).catch( err => done(err));
        }
      }).catch( err => done(err));
    });
  });