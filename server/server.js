/**
 * Created by Administrator on 2019/1/10.
 */
const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const static = require('express-static')

const app = express()

const isDev = process.env.NODE_ENV ==='development';

/*if(!isDev){*/
    const serverEntry= require('../dist/server-entry').default
    const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'),'utf-8')
    app.use('/public', static(path.join(__dirname, '../dist')))

    app.use('*',(req,res)=>{
        const appString = ReactSSR.renderToString(serverEntry)
        res.send(template.replace('<!--app-->',appString))
    })
/*}else{
    const devStatic = require('./util/dev-static')
    devStatic(app)
}*/



app.listen(3333)