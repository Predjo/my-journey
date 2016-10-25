const express     = require('express');
const router      = express.Router({ mergeParams : true });
const matchRoute  = require('server/modules/utils').matchRoute;
const renderReact = require('server/modules/utils').renderReact;

const routes      = require('shared/modules/index').routes;

router.route('*').get(matchRoute(routes, (req, res, props) => {
  res.render('pages/index', { rootMarkup : renderReact(props), preloadedState : 'test' });
}, (req, res) => {
  res.status(404).send('Not found');
}));

module.exports = router;
