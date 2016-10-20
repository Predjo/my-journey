
/* Renders React to string including the redux store */

const React          = require('React');
const renderToString = require('react-dom/server').renderToString;
const RouterContext  = require('react-router').RouterContext;
const Provider       = require('react-redux').Provider;

module.exports = function (renderProps, store) {
  return renderToString(
    //<Provider store={store}>
      <RouterContext { ...renderProps } />
    //</Provider>
  );
};
