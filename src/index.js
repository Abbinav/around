import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router } from "react-router-dom";
//import {render} from 'react-dom'; 
//^just realized that when we import ReactDOM, render is included.
//tried {REACTDOM, render} from 'react-dom'; and page appeared blank
//import {BrowserRouter} from 'react-router-dom'; <-- redundant
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <App />
    </Router>
    ),
    document.getElementById('root'));
registerServiceWorker();
