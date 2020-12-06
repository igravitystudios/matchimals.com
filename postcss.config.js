const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const plugins = [autoprefixer(), cssnano()];

module.exports = {
  plugins,
};
