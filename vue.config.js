const path = require('path');

module.exports = {
  chainWebpack: config => {
      config.resolve.alias
          .set('@', path.resolve(__dirname, 'src/'))
  },

  css: {
    sourceMap: true,
  },

  outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production'
    ? '/10bagger/'
    : '/'
}
