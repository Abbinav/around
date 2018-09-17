import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'
class signup extends React.Component{
   render(){
      return(
   
   <div class="container">
    <div class="col-md-6">
    <div id="logbox">
      <form id="signup" method="post" action="/signup">
        <h1>Sign Up</h1>
        <input name="user[name]" type="text" placeholder="What's your username?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" class="input pass"/>
        <input name="user[password]" type="password" placeholder="Choose a password" required="required" class="input pass"/>
        <input name="user[password2]" type="password" placeholder="Confirm password" required="required" class="input pass"/>
        <input name="user[email]" type="email" placeholder="Email address" class="input pass"/>
        <input type="submit" value="Sign me up!" class="inputButton"/>
        <div class="text-center">
            Already have an account? <Link to="/login" className="nav-link">
            <a href="#" id="login_id">Login</a>
            </Link>
        </div>
      </form>
    </div>
   </div>
   </div>
         
         )
   }
};

export default signup;
