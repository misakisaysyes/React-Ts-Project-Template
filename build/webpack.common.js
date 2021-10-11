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
        ],
    }
}