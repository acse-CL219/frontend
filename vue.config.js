module.exports = {
    publicPath:"/brianliu0104",
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ]
    // https://cli.vuejs.org/zh/config/#devserver-proxy
    // 測試時前端應用和後端不在同一個服務器上，需要將請求代理到api服務器上
    ,
    devServer: {
        open: true,
        host: 'localhost',
        port: '8080',
        //將api下的請求代理到localhost:500下
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // 要請求的地址
                ws: true,

                changeOrigin: true
            }
        }
    }
}