module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './bundle.js'
  },

  mode: 'development',
  watch: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  target: 'electron-renderer',

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ]
  }
};
