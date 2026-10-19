import path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default (env, argv) => {
  const isDev = argv.mode === 'development'

  return {
    entry: './src/main.jsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? '[name].js' : 'assets/[name].[contenthash:8].js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          resolve: { fullySpecified: false },
          use: {
            loader: 'babel-loader',
            options: { envName: argv.mode },
          },
        },
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: 'assets/[name].[contenthash:8].css',
        }),
    ].filter(Boolean),

    performance: {
      maxAssetSize: 512 * 1024,
      maxEntrypointSize: 512 * 1024,
    },

    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',

    devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
  }
}
