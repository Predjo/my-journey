
const express  = require('express');
const passport = require('passport');
const User     = require('../models/user');
const router   = express.Router({ mergeParams : true });

router.route('/')
  .get(passport.authenticate('jwt', { session : false }), function (req, res) {
    User
      .fetchAll()
      .then(function (users) {
        res.json({ users });
      });
  });

module.exports = router;
