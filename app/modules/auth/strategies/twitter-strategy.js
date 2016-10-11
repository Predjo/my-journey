
const _                = require('lodash');
const TweitterStrategy = require('passport-twitter').Strategy;
const configAuth       = require('../config/auth-config');

const User             = require(global.__base + '/app/models/user');

module.exports = new TweitterStrategy({
  consumerKey       : configAuth.twitterAuth.consumerKey,
  consumerSecret    : configAuth.twitterAuth.consumerSecret,
  callbackURL       : configAuth.twitterAuth.callbackURL,
  includeEmail      : true,
  passReqToCallback : true
},
  function(req, token, refreshToken, profile, done) {
    process.nextTick(() => {

      const name      = profile.displayName;
      const email     = _.get(profile, 'emails[0].value');
      const avatarUrl = _.get(profile, 'photos[0].value');

      User.query({ where : { twitterId : profile.id }, orWhere : { email }})
      .fetch().then( user => {
        
        // There is a user based on twitterId or email
        if (user) {
          
          // First time using twitter to sign in, update user info
          if ( !user.get('twitterId') ) {
            user.save({
              twitterToken   : token,
              twitterId      : profile.id,
              name          : user.get('name') || name,
              avatarUrl     : user.get('avatarUrl') || avatarUrl
            }).then( () => done(null, user) ).catch( err => done(err));
          } else {
            done(null, user);
          }
        
        // User doesnt exist, create one
        } else {
          const newUser = new User({
            twitterId     : profile.id,
            twitterToken  : token,
            name          : name,
            email         : email,
            avatarUrl     : avatarUrl
          });

          newUser.save().then( () => done(null, newUser) ).catch( err => done(err));
        }
      }).catch( err => done(err));
    });
  });