const { override, addWebpackAlias } = require('customize-cra');
const aliasConfig = require('./config/webpack.alias.js');

const hasAlias =
  aliasConfig && aliasConfig.resolve && aliasConfig.resolve.alias;

module.exports = override(
  hasAlias && addWebpackAlias(aliasConfig.resolve.alias)
);
