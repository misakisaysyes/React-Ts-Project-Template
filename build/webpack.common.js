const themeColor = require('./antd.theme.color')
module.exports = {
    module: {
        rules: [
            // antd样式和自定义样式一起处理
            {
                test: /\.less$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'postcss-loader', 
                    { 
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: themeColor,
                                javascriptEnabled: true
                            },
                        }
                    }
                ],
            },     
            {
                test: /\.ts|\.tsx$/,
                include: /src/,
                use: ['babel-loader'],
            },
            {
              test: /\.html$/,
              use: ['html-loader'],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: './fonts/[name].[contenthash:8].[ext]',
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './images/[name].[contenthash:8].[ext]',
                }
            },
        ],
    }
}