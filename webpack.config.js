const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd', // Universal Module Definition
    globalObject: 'this', // Needed for universal compatibility
  },
  externals: {
    // Exclude React from the bundle
    'react': 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
