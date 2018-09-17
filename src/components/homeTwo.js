//
//  THIS IS home.js BEFORE THE HOME-MADE COLLAPSIBLE WAS IMPLEMENTED
//
import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';

const bikeAddress = 'https://i.imgur.com/JZiBW2z.png';
const bookAddress = 'https://i.imgur.com/qOq3DU2.png';
const houseAddress = 'https://i.imgur.com/mfSjM30.png';
const electronicAddress = 'https://i.imgur.com/GWhz6Ym.png';
const clothingAddress = 'https://i.imgur.com/o8I9IHw.png';
const entertainmentAddress = 'https://i.imgur.com/AnNzjzz.png';


class HomeTwo extends React.Component{
   render(){
      return(
         <div>
         <h1 className= "title"> around <img src= "https://i.imgur.com/XAimBaG.png" className="logo_img" alt='around logo'></img> </h1>
    <div className="App">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <Link to="/results">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </Link>
      </form>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Collapsible trigger={<div> <img height="200px" src={bikeAddress}/> <figcaption>Transportation</figcaption>  </div>}>
            
                <div className = "flex-container fluid">
                  <img src="https://i.imgur.com/nVM93E6.png" alt="bike logo" className="bike_img transportation-collapsible" ></img>
                  <figcaption className="transportation-collapsible">Bikes</figcaption>
                  <img src="https://i.imgur.com/G2vjNLK.png"  className= "car_img transportation-collapsible" ></img>
                  <figcaption className="transportation-collapsible">Cars</figcaption>
                  <img src="https://i.imgur.com/E6sKyF0.png" className = "ride_img transportation-collapsible"></img>
                  <figcaption className="transportation-collapsible">Ride Sharing</figcaption>
                </div>
            </Collapsible>
            
          </div>
          <div className="col-md-2">
          <Collapsible trigger={<div> <img height="200px" src={bookAddress}/> <figcaption>Books</figcaption>  </div>}>
            <img src= "https://i.imgur.com/G2vjNLK.png" className= "book_img"alt="book logo" ></img>
            
            </Collapsible>
          </div>
          <div className="col-md-2">
            <img src= "https://i.imgur.com/mfSjM30.png" height = "200px" alt="house logo" className= "house_img"></img>
            <figcaption>Housing</figcaption>
          </div>
          <div className="col-md-2">
            <img src= "https://i.imgur.com/GWhz6Ym.png" height = "200px" alt="phone logo" className= "electronic_img"></img>
            <figcaption>Electronics</figcaption>
          </div>
          <div className="col-md-2 ">
            <img src= "https://i.imgur.com/o8I9IHw.png" height = "200px" alt="clothing logo" className= "clothing_img"></img>
            <figcaption>Clothing</figcaption>
          </div>
          <div className="col-md-2">
            <img src= "https://i.imgur.com/AnNzjzz.png" height = "200px" alt="movie ticket logo" className= "entertainment_img"></img>
            <figcaption>Entertainment</figcaption>
          </div>
        </div>
      </div> 
    </div> 
    </div>
      )
   }
};

export default HomeTwo;