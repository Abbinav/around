import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.svg';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class navbar extends React.Component{
   render(){
      return(
         <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">around</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
             </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                 <li class="nav-item">
                  <Link to='./components/blank'>
                    <a class="nav-link" href='#' >Home <span class="sr-only">(current)</span></a>
                  </Link>
                 </li>
                <li class="nav-item">
                   <a class="nav-link" href="#">Link</a>
                 </li>
                <li class="nav-item">
                   <a class="nav-link" href="#">Disabled</a>
                </li>
             </ul>
            </div>
         </nav>
      )
   }
};

export default navbar;