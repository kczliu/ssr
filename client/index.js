/**
 * Created by Administrator on 2019/1/10.
 */
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './app'

const root = document.getElementById('root')
const render =Component =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Component></Component>
        </AppContainer>,
        root
    )
}

render(App)
if(module.hot){
    module.hot.accept('./app',()=>{
        const NextApp = require('./app').default;
        render(NextApp)
    })
}