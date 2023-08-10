const path = require('path');

module.exports = {
  entry: './js-module.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-webpack.js'
  }
};
