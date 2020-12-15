module.exports = {
  // 配置跨域代理
  devServer: {
    // Paths
    host: 'localhost',
    port: '9633',
    https: false,
    open: true,
    proxy: {
      '/gs-robot': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://10.7.5.88:8080', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域

      }
    },
  }
}
