
const Config = require(global.__base + '/config');

module.exports = {
  facebookAuth : {
    appID       : '1771677669748027',
    appSecret   : '8650b50fe8f6382fa7f2c9058ce1247f',
    callbackURL : `http${ Config.https ? 's' : '' }://${ Config.host }:${ Config.port }/auth/facebook/callback`
  },
  
  twitterAuth : {
    consumerKey    : 'YOUR-TWITTER-CONSUMER-KEY',
    consumerSecret : 'YOUR-TWITTER-CONSUMER-SECRET',
    callbackURL    : 'http://localhost:3000/auth/twitter/callback'
  },
  
  googleAuth : {
    clientID       : 'YOUR-GOOGLE-CLIENT-ID',
    clientSecret   : 'YOUR-GOOGLE-CLIENT-SECRET',
    callbackURL    : 'http://localhost:3000/auth/google/callback'
  }
}