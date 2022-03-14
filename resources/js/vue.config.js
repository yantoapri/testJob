module.exports = {
  // local Laravel server address for api proxy
  devServer: { proxy: 'http://feapi.ajt.my/' },

  // outputDir should be Laravel public dir
  outputDir: '../../../public/',
  publicPath: '/',

  // for production we use blade template file
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/welcome.blade.php'
    : 'index.html',
}