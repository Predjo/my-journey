
const express     = require('express');
const passport    = require('passport');
const router      = express.Router({ mergeParams: true });

router.route('/facebook')
  .get(passport.authenticate('facebook', { scope: 'email' }));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook', {
    successRedirect : '/dashboard',
    failureRedirect : '/',
    session         : false
  }));

router.route('/twitter')
  .get(function(req, res) {

  });

router.route('/twitter/callback')
  .get(function(req, res) {

  });

router.route('/google')
  .get(function(req, res) {

  });

router.route('/google/callback')
  .get(function(req, res) {

  });

module.exports = router;