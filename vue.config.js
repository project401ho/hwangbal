module.exports = {
    devServer: {
        proxy: {
            '/api' : {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewirte:{
                    '^/api': ''
                }
            }
        }
    },
    outputDir:'../backend/public',
}