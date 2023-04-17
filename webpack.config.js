const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader" /* "eslint-loader" */],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      cache: true,
      formatter: require("eslint").CLIEngine?.getFormatter("stylish"),
      eslintPath: require.resolve("eslint"),
      resolvePluginsRelativeTo: __dirname,
      ignore: true,
      // useEslintrc: true,
    }),
  ],
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
};
