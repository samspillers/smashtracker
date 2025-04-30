const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: path.join(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
            'babel-loader',
          ]
        // {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env', '@babel/preset-react'],
        //     // plugins: ['@babel/plugin-transform-react-jsx-source']
        //   },
        // }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'eval-source-map',
  // devServer: {
  //   static: path.resolve(__dirname, 'src')
  // }
}