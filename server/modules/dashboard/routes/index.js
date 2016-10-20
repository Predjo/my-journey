
const express = require('express');
const router  = express.Router({ mergeParams : true });
const match   = require('react-router').match;

const renderReact = require('server/modules/utils').renderReact;

const routes = require('shared/modules/dashboard').routes;

function matchRoute (req, res) {
  match({ routes, location : req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.render('pages/dashboard', { rootMarkup : renderReact(renderProps), preloadedState : 'test' });
    } else {
      res.status(404).send('Not found');
    }
  });
}

router.route('*').get(matchRoute);

module.exports = router;

/*function (req, res) {
  res.render('pages/dashboard', { preloadedState : 'test' });
}
*/
