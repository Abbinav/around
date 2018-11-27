import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aws_exports from './aws-exports';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
import NavbarTwo from './components/navbarTwo';
//import Home from './components/home';
import Routes from './components/Routes';


Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
     <div>
        <Routes />
      </div>
    );
  }
}

export default App;
