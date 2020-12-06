module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/styles.min.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
