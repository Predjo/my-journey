
const allFiles = require('require-all')({
  dirname     :  __dirname,
  excludeDirs :  /^(config)$/,
  recursive   : true,
  map         : (name) => {
    return name.replace(/-([a-z])/g, function (m, c) {
      return c.toUpperCase();
    });
  }
});

module.exports = allFiles;
