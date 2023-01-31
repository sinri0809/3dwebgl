/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-var-requires */

/* config-overrides.js */
const { override, overrideDevServer } = require('customize-cra');
// const path = require('path');
module.exports = {
  webpack: override(

  ),
  devServer: overrideDevServer(
    devServerConfig(),
  )
}

function devServerConfig(){
  return (config) => {
    return {
      ...config,
      proxy: {
        "/": {
          target: "https://prod.spline.design/*",
          
        }
      },
      // header: {
      //   'Access-Control-Allow-Origin': '*'
      // }
    }
  }
}