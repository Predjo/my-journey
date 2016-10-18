
/* Requires all files in a folder */

module.exports = function (dirname) {

  return require('require-all')({
    dirname   : dirname,
    recursive : true,
    map       : (name) => {
      return name.replace(/-([a-z])/g, function (m, c) {
        return c.toUpperCase();
      });
    }
  });
};
