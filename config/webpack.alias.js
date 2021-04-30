const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@form': path.resolve(__dirname, '../src/components/form'),
      styles: path.resolve(__dirname, '../src/styles'),
      images: path.resolve(__dirname, '../src/assets/images'),
    },
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
};
