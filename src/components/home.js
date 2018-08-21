import React from 'react';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';
class Home extends React.Component{
   render(){
      return(
         <div>
         <h1 className= "title"> around <img src= "https://i.imgur.com/XAimBaG.png" className="logo_img" alt='around logo'></img> </h1>
    <div className="App">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <label for= "toggle">
            <img  src= "https://i.imgur.com/JZiBW2z.png" height = "200px" alt="bike logo" className= "bike_img" ></img>
            </label>
            <figcaption>Transportation</figcaption>
        
            <div className="flex-container">

              <input id="toggle" type="checkbox"></input>
              <div class="expand">
                <section className = "sub">
                  <img  src= "https://i.imgur.com/nVM93E6.png" alt="bike logo" className= "bike_img" ></img>
                  <img src = "https://i.imgur.com/G2vjNLK.png"  className= "car_img" ></img>
                  <img src = "https://i.imgur.com/E6sKyF0.png" className = "ride_img"></img>
                </section>
              </div>
            </div>

            
          </div>
          <div className="col-md-2">
          
            <img src= "https://i.imgur.com/qOq3DU2.png" height = "200px" alt="book logo" className= "book_img"></img>
            <figcaption>Books</figcaption>
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
          <div className="col-md-2 ">
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

export default Home;