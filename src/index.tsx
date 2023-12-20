import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.scss'
import './index.scss'
import 'typeface-inter'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
