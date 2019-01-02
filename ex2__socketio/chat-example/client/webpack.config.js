const path = require('path');

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    // __dirname = client
    path: path.join(__dirname, "public/dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  resolve: {
    // enable import extensions.
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        // bundle target extensions.
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    port: 5000,
    contentBase: "public/"
  }
};
