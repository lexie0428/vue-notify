module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  assetsDir: '',
  productionSourceMap: false,
  filenameHashing: true,
  devServer: {
    proxy: 'http://localhost:8080'
  }
}