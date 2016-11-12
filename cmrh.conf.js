
const sass = require('node-sass');

module.exports = {
  // the custom template for the generic classes
  extensions         : ['.scss', '.css'],
  generateScopedName : '[name]__[local]___[hash:base64:5]',
  devMode            : process.env.NODE_ENV === 'development',
  preprocessCss      : (data, filename) =>
    sass.renderSync({
      data,
      file : filename,
    }).css
};
