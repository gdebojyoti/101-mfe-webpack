const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'tictactoe',
      filename: 'export.js',
      exposes: {
        './output': './src/index.js'
      },
      shared: ['dayjs']
    })
  ]
}