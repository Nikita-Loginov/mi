const config = {
    mode : 'production',
    entry: {
        index:'src/js/index.js',
    },
    output:{
        filename:'[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        overlay: true,
        open: true
    }
}

module.exports = config;