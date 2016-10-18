
const express     = require('express');
const passport    = require('passport');
const router      = express.Router({ mergeParams : true });

router.route('/facebook')
  .get(passport.authenticate('facebook', { scope : 'email', session : false }));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook', {
    successRedirect : '/dashboard',
    failureRedirect : '/',
    session         : false
  }));

router.route('/twitter')
  .get(passport.authenticate('twitter', { scope : 'email', session : false }));

router.route('/twitter/callback')
  .get(passport.authenticate('twitter', {
    successRedirect : '/dashboard',
    failureRedirect : '/',
    session         : false
  }));

router.route('/google')
  .get(passport.authenticate('google', { scope : 'email', session : false }));

router.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect : '/dashboard',
    failureRedirect : '/',
    session         : false
  }));

module.exports = router;
