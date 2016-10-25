
//Creates a match function based on react router routes

const match = require('react-router').match;

module.exports = function matchRoute(routes, matchCB, noMatchCB) {
  return function  (req, res) {
    match({ routes, location : req.originalUrl }, (error, redirectLocation, renderProps) => {
      if (error) {

        res.status(500).send(error.message);

      } else if (redirectLocation) {

        res.redirect(302, redirectLocation.pathname + redirectLocation.search);

      } else if (renderProps) {

        matchCB(req, res, renderProps);

      } else {

        if (noMatchCB) {
          noMatchCB(req, res);
        } else {
          res.status(404).send('Not found');
        }

      }
    });
  };
};
