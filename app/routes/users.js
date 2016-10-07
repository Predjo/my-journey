
const express = require('express');
const User    = require('../models/user');
const router  = express.Router({ mergeParams: true });

router.route('/')
  .get(function(req, res) {
    User
      .fetchAll()
      .then(function(users) {
        res.json({ users });
      });
  });

module.exports = router;