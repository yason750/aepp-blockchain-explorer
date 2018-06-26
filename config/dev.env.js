'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AETERNITY_EPOCH_API_URL : `"${process.env.AETERNITY_EPOCH_API_URL || 'https://sdk-testnet.aepps.com/'}"`,
})
