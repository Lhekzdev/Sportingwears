const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "zlib": require.resolve("browserify-zlib"),
    "util": require.resolve("util/"),
    "path": require.resolve("path-browserify"),
    "url": require.resolve("url/"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert/"),
    "crypto": require.resolve("crypto-browserify"),
    "os": require.resolve("os-browserify"),
    "buffer": require.resolve("buffer/")
  };


  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"]
    })
  ]);

  return config;
};
