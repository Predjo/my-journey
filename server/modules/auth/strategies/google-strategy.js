
const _                = require('lodash');
const GoogleStrategy   = require('passport-google-oauth20').Strategy;
const configAuth       = require('../config/auth-config');

const User             = require('server/models/user');

module.exports = new GoogleStrategy({
  clientID          : configAuth.googleAuth.clientID,
  clientSecret      : configAuth.googleAuth.clientSecret,
  callbackURL       : configAuth.googleAuth.callbackURL,
  passReqToCallback : true
},
  function (req, token, refreshToken, profile, done) {
    process.nextTick(() => {

      const name      = profile.displayName;
      const email     = _.get(profile, 'emails[0].value');
      const avatarUrl = _.get(profile, 'photos[0].value');

      User.query({ where : { googleId : profile.id }, orWhere : { email }})
      .fetch().then( user => {

        // There is a user based on googleId or email
        if (user) {

          // First time using google to sign in, update user info
          if ( !user.get('googleId') ) {
            user.save({
              googleToken : token,
              googleId    : profile.id,
              name        : user.get('name') || name,
              avatarUrl   : user.get('avatarUrl') || avatarUrl
            }).then( () => done(null, user) ).catch( err => done(err));
          } else {
            done(null, user);
          }

        // User doesnt exist, create one
        } else {
          const newUser = new User({
            googleId    : profile.id,
            googleToken : token,
            name        : name,
            email       : email,
            avatarUrl   : avatarUrl
          });

          newUser.save().then( () => done(null, newUser) ).catch( err => done(err));
        }
      }).catch( err => done(err));
    });
  });
