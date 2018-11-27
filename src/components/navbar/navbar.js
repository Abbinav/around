import React from 'react';
import { Link } from 'react-router-dom';
import aws_exports from '../../aws-exports';
import $ from 'jquery'; 
import cx from 'classnames';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css';
class Navbar extends React.Component{
   state = {
      displaySearch: false,
      searchTerm: ""
  }
   
   searchBarHandler = (event) => {
    const searchTerm = event.target.value;
    this.setState({searchTerm});
   }
   displaySetter = () => {
      const curURL = window.location.href.split("/");
      // console.log("array = " + JSON.stringify(curURL))
      // console.log("length = " + JSON.stringify(curURL.length))
      var displaySearch = false;
      if(curURL[curURL.length - 1] != "" /*  || curURL[curURL.length - 2] == */) 
         displaySearch = false;
      else
         displaySearch = true;
      // console.log("displaySearch: " + displaySearch)
      if(displaySearch == this.state.displaySearch)
         return
      this.setState({displaySearch})
      
   }
   
   
   render(){
      this.displaySetter();
      
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
                 <li className={cx('', {'nav-hide': this.state.displaySearch})}>
                    <input onChange={event => this.searchBarHandler(event)} className="form-control mr-sm-2 searchBar-custom navbar-bar " type="search" placeholder="Search" aria-label="Search"></input>
                 </li>
                 <li className={cx('', {'nav-hide': this.state.displaySearch})}>
                    <Link to={"/results/" + this.state.searchTerm}>
                    <button className="btn btn-outline-success my-2 my-sm-0 navbar-search " type="submit" onMouseUp={() => (window.location = "/results/" + this.state.searchTerm) && this.props.reload()}>Search</button>
                    </Link>
                 </li>
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