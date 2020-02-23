  /* config-overrides.js */
  /* Adding th below to minimize the material bundle */
  /* For reference: https://material-ui.com/guides/minimizing-bundle-size/ */
  
  const { useBabelRc, override } = require('customize-cra')

  module.exports = override(
    useBabelRc()
  );