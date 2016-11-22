const express     = require('express');
const router      = express.Router({ mergeParams : true });
const matchRoute  = require('server/modules/utils').matchRoute;
const renderReact = require('server/modules/utils').renderReact;

const routes         = require('shared/modules/index').routes;
const configureStore = require('shared/store/configure-index-store').default;
const store          = configureStore({});
const preloadedState = store.getState();

router.route('*').get(matchRoute(routes, (req, res, props) => {
  res.render('pages/index', { rootMarkup : renderReact(props, store), preloadedState });
}, (req, res) => {
  res.status(404).send('Not found');
}));

module.exports = router;
