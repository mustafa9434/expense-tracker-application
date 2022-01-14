import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './styles/global.css'
import store from './app/index'

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
)