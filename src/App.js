import React, { Component } from 'react';
import logo from './media/logo.svg';
import Amplify from 'aws-amplify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aws_exports from './aws-exports';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';


Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
  <div>
    <Navbar />
    <h1 className= "title"> around <img src= "https://i.imgur.com/XAimBaG.png" className= "logo_img" alt='around logo'></img> </h1>
    <div className="App">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <img src= "https://i.imgur.com/nBAVvCJ.png" height = "200px" alt="bike logo" className= "bike_img"></img>
            <figcaption>Transportation</figcaption>
          </div>
          <div className="col-md-2">
            <img src= "https://i.imgur.com/Q8dRAzi.png" height = "200px" alt="book logo" className= "book_img"></img>
            <figcaption>Books</figcaption>
          </div>
          <div className="col-md-2">
            <img src= "https://i.imgur.com/63nc379.png" height = "200px" alt="house logo" className= "house_img"></img>
            <figcaption>Housing</figcaption>
          </div>
          <div className="col-md-2">
            <img src= "https://i.imgur.com/DJPEq3Q.png" height = "200px" alt="phone logo" className= "electronic_img"></img>
            <figcaption>Electronics</figcaption>
          </div>
          <div className="col-md-2 ">
            <img src= "https://i.imgur.com/RQaTit2.png" height = "200px" alt="clothing logo" className= "clothing_img"></img>
            <figcaption>Clothing</figcaption>
          </div>
          <div className="col-md-2 ">
            <img src= "https://i.imgur.com/g5frXpt.png"height = "200px" alt="movie ticket logo" className= "entertainment_img"></img>
            <figcaption>Entertainment</figcaption>
          </div>
        </div> //row div, contains icons
      </div> //container-fluid div
    </div> //app div
  </div> //root div

    );
  }
}

export default App;
