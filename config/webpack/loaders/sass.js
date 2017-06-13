const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader', options: { minimize: env.NODE_ENV === 'production' }
      },
      'resolve-url-loader',
      {
        loader: 'postcss-loader?parser=sugarss', options: {
          plugins: [
            require("precss"),
            require("autoprefixer"),
            require("postcss-apply"),
            require("postcss-calc"),
            require("postcss-font-magician")
          ],
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader', options: { sourceMap: true }
      }
    ]
  })
}
