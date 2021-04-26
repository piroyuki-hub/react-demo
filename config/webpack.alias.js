const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      styles: path.resolve(__dirname, '../src/styles'),
      images: path.resolve(__dirname, '../src/assets/images'),
    },
    extensions: ['.ts', '.tsx', '.scss'],
  },
};
