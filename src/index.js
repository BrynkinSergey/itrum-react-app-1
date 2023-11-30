import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/fonts.scss'
import 'typeface-inter';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
