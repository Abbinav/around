import React from 'react';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import $ from 'jquery'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css';
class Navbar extends React.Component{
   render(){
      return(
         <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <Link to="/">
                    around
                </Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <Link to="/results" className="nav-link">
                        My Items
                    </Link>
                 </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Mailbox
                    </a>
                 </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">
                        Sell
                   </a>
                </li>
                 <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
             </ul>
            </div>
         </nav>
      )
   }
};

export default Navbar;