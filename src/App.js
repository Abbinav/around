import React, { Component } from 'react';
import logo from './media/logo.svg';
import Amplify from 'aws-amplify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aws_exports from './aws-exports';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import navbar from './components/navbar';


Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
      <html>
      <div>
     <navbar> </navbar>
   <h1 class= "title"> around <img src= "https://i.imgur.com/XAimBaG.png" class= "logo_img" alt='around logo'></img> </h1>
      <div className="App">
        
         <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
    
    <img src= "https://i.imgur.com/nBAVvCJ.png" class= "bike_img" alt="bike icon"></img>
    <img src= "https://i.imgur.com/Q8dRAzi.png" class= "book_img" alt="book icon"></img>
    <img src= "https://i.imgur.com/63nc379.png" class= "house_img" alt="house icon"></img>
    <img src= "https://i.imgur.com/DJPEq3Q.png" class= "electronic_img" alt="phone icon"></img>
    <img src= "https://i.imgur.com/RQaTit2.png" class= "clothing_img" alt="clothing icon"></img>
    <img src= "https://i.imgur.com/g5frXpt.png" class= "entertainment_img" alt=""></img>
      </div>
    </div>
    </html>
    );
  }
}

export default App;
