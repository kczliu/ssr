/**
 * Created by Administrator on 2019/1/10.
 */
const path = require('path')
const HtmlWpackPlugin = require('html-webpack-plugin')
const webpack  = require('webpack')
const isDev = process.env.NODE_ENV = 'development'

const config = {
    entry:{
        app:path.join(__dirname,'../client/index.js')
    },
    output:{
        filename:'[name]-[hash:4].js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public/'
    },
    module:{
        rules:[
            {
                test:/jsx?$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWpackPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ],
    resolve:{
        extensions:['.js','.css']
    }
}

if (isDev){
    config.entry={
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'../client/index.js')
        ]
    }
    config.devServer={
        host:'0.0.0.0',
        port:'8888',
        contentBase:path.join(__dirname, '../dist'),
        hot:true,
        overlay:{
            errors:true
        },
        publicPath:'/public/',
        historyApiFallback:{
            index:'/public/index.html'
        }
    }
}
config.plugins.push(new webpack.HotModuleReplacementPlugin() )
module.exports = config