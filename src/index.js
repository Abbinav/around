import React from 'react';
import ReactDOM from 'react-dom'; 
import {render} from 'react-dom'; 
//tried {REACTDOM, render} from 'react-dom'; and page appeared blank
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ),
    document.getElementById('root'));
registerServiceWorker();
