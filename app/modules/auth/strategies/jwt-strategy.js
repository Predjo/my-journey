
const JwtStrategy = require('passport-jwt').Strategy;

const User        = require(global.__base + '/app/models/user');

const cookieExtractor = function(req) {
  let token = null;
  if (req && req.cookies)
  {
    token = req.cookies['jwt'];
  }

  return token;
};

var opts = {}
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey    = 'secret';
opts.issuer         = 'auth.myjourney.io';

module.exports = new JwtStrategy(opts, function(jwt_payload, done) {

  User.query({ where : { id: jwt_payload.id }})
  .fetch().then( user => {

    // There is a user based on id in jwt
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  }).catch( err => done(err, false));

});