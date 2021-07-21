import path  from 'path';

module.exports = () => {
  return {
    devtool: 'eval',
    entry: './src/components/preview.js',
    mode: 'development',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    output: {
      path: path.resolve(__dirname, 'public/js'),
      publicPath: '/js/',
      filename: '[name].bundle.js',
      pathinfo: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, `src/components/**/*.js`)],
          exclude: [
            path.resolve(__dirname, 'src/components/preview.js'),
            path.resolve(__dirname, 'src/components/**/*.config.js')
          ],
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    },
    performance: {
      maxEntrypointSize: 900000,
      maxAssetSize: 900000
    }
  }
}
