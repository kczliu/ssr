/**
 * Created by Administrator on 2019/1/10.
 */
const path = require('path')
module.exports = {
    target:'node',
    mode:'none',
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    output:{
        filename:'server-entry.js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public',
        libraryTarget:'commonjs2'
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

    resolve:{
        extensions:['.js','.css']
    }
}