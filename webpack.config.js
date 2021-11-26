const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js",
  },
};

module.exports = config;
