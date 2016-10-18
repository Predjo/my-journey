
const express = require('express');
const router  = express.Router({ mergeParams : true });

router.route('/').get(function (req, res) {
  res.render('pages/dashboard', { preloadedState : 'test' });
});

module.exports = router;
