const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
      app: "./app/javascript/index"
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [new ESLintPlugin()],
    module: {
        rules: [
            {
               test: /\.css$/,
               use: [ 
                   {loader: 'style-loader'},
                   {loader: 'css-loader' }
               ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {loader: 'eslint-loader'}
            }
         ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".css",]
        modules: [
            '.'
            ''
        ]
    }
    devServer: {
        contentBase: './dist',
        port: '3000',
        inline: true
      },
    watch: true
  };