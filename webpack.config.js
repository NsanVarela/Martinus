new HTMLWebpackPlugin({
    template: '/path/to/index.html',
    favicon: '/path/to/favicon.ico',
 })

[{
    entry: path.resolve(projectRoot, 'src', 'app.ts'),
    mode: 'production',
    output: {
      path: path.resolve(projectRoot, 'dist'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(eot|ttf|woff|woff2|svg|png)$/i,
          use: 'file-loader',
          options: {
            esModule: false,
            },
        }
      ]
    }
  }
]