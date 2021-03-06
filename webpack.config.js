module.exports = {
    devtool : 'eval-source-map',
    entry: [
        './source/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,  
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    devServer: { disableHostCheck: true}
}