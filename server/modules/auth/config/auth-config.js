
const Config = require(global.__base + '/config');

module.exports = {
  facebookAuth : {
    appID       : '1771677669748027',
    appSecret   : '8650b50fe8f6382fa7f2c9058ce1247f',
    callbackURL : `http${ Config.https ? 's' : '' }://${ Config.host }:${ Config.port }/auth/facebook/callback`
  },

  twitterAuth : {
    consumerKey    : 'eyTPR2IHfXzE3knZHvHXKUI4z',
    consumerSecret : 'ED7LRpNOMCokzDtwu12HDRtyAdG1oHliH4i8J2itgHo3UNoE4r',
    callbackURL    : 'http://localhost:3000/auth/twitter/callback'
  },

  googleAuth : {
    clientID     : '653634253278-5n0s5aips7s40ckcuv7ja8sj2u3m1ah7.apps.googleusercontent.com',
    clientSecret : 'STXY7aJA6DYLBVwos8wgoCLC',
    callbackURL  : `http${ Config.https ? 's' : '' }://${ Config.host }:${ Config.port }/auth/google/callback`
  }
};
