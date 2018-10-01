import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';

//import {transportationClickHandler} from './handlerFunctions/homeHandlers';
//^did not work
const bikeAddress = 'https://i.imgur.com/JZiBW2z.png';
const bookAddress = 'https://i.imgur.com/qOq3DU2.png';
const houseAddress = 'https://i.imgur.com/mfSjM30.png';
const electronicAddress = 'https://i.imgur.com/GWhz6Ym.png';
const clothingAddress = 'https://i.imgur.com/o8I9IHw.png';
const entertainmentAddress = 'https://i.imgur.com/AnNzjzz.png';


class Home extends React.Component{
  state = {
    transportationShow : false,
    booksShow : false,
    housingShow : false,
    electronicsShow : false,
    clothingShow : false,
    entertainmentShow : false,
    searchTerm: ""
  }
  
  searchBarHandler = (event) => {
    const searchTerm = event.target.value;
    this.setState({searchTerm});
  }
  
  dropdownHandler = (boolToChange) => {
    let curState = {
    transportationShow : false,
    booksShow : false,
    housingShow : false,
    electronicsShow : false,
    clothingShow : false,
    entertainmentShow : false
    };
    curState[boolToChange] = !this.state[boolToChange];
    this.setState(curState);
  }
  
  
   render(){
     let transportationDropdown = null;
     let bookDropdown = null;
     let housingDropdown = null;
     let electronicsDropdown = null;
     let clothingDropdown = null;
     let entertainmentDropdown= null;
     if(this.state.transportationShow){
       transportationDropdown = (
        <div className = "flex-container fluid bg-warning">
          <div>
            <img src="https://i.imgur.com/nVM93E6.png" alt="bike logo" className="img-dropdown" ></img>
            <figcaption className="transportation-collapsible">Bikes</figcaption>
          </div>
          <div>
            <img src="https://i.imgur.com/G2vjNLK.png"  className= "img-dropdown" ></img>
            <figcaption className="transportation-collapsible">Cars</figcaption>
          </div>
          <div>
            <img src="https://i.imgur.com/E6sKyF0.png" className = "img-dropdown"></img>
            <figcaption className="transportation-collapsible">Ride Sharing</figcaption>
          </div>
        </div>
       );
     }
     
    if(this.state.booksShow){
        bookDropdown = (
          <div className = "flex-container fluid bg-primary">
            <img src= "https://i.imgur.com/cT2uSsC.jpg" className= "img-dropdown" alt="book logo" ></img>
          </div>
        );
    }
     
    if(this.state.housingShow){
        housingDropdown = (
          <div className = "flex-container fluid bg-primary">
            <img src= "https://i.imgur.com/cT2uSsC.jpg" className= "img-dropdown" alt="book logo" ></img>
          </div>
        );
    }
    if(this.state.electronicsShow){
        electronicsDropdown = (
          <div className = "flex-container fluid bg-primary">
            <img src= "https://i.imgur.com/cT2uSsC.jpg" className= "img-dropdown" alt="book logo" ></img>
          </div>
        );
    }
    if(this.state.clothingShow){
        clothingDropdown = (
          <div className = "flex-container fluid bg-primary">
            <img src= "https://i.imgur.com/cT2uSsC.jpg" className= "img-dropdown" alt="book logo" ></img>
          </div>
        );
    }
    
    if(this.state.entertainmentShow){
        entertainmentDropdown = (
          <div className = "flex-container fluid bg-primary">
            <img src= "https://i.imgur.com/cT2uSsC.jpg" className= "img-dropdown" alt="book logo" ></img>
          </div>
        );
    }
      return(
         <div>
         <h1 className= "title"> around <img src= "https://i.imgur.com/XAimBaG.png" className="logo_img" alt='around logo'></img> </h1>
    <div className="App">
      <form className="form-inline my-2 my-lg-0">
        <input onChange={event => this.searchBarHandler(event)} className="form-control mr-sm-2 searchBar-custom" type="search" placeholder="Search" aria-label="Search"></input>
        <Link to={"/results/" + this.state.searchTerm}>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </Link>
      </form>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div onClick={this.dropdownHandler.bind(this, "transportationShow")}> <img height="200px" src={bikeAddress}/> <figcaption>Transportation</figcaption>  </div>
            {transportationDropdown}
          </div>
          
          <div className="col-md-2">
            <div onClick={this.dropdownHandler.bind(this, "booksShow")}> <img height="200px" src={bookAddress}/> <figcaption>Books</figcaption>  </div>
            {bookDropdown}
          </div>
          
          <div className="col-md-2">
            <div onClick={this.dropdownHandler.bind(this, "housingShow")}> <img height="200px" src={houseAddress}/> <figcaption>Housing</figcaption>  </div>
            {housingDropdown}
          </div>
          
          <div className="col-md-2">
            <div onClick={this.dropdownHandler.bind(this, "electronicsShow")}> <img height="200px" src={electronicAddress}/> <figcaption>Electronics</figcaption>  </div>
            {electronicsDropdown}
          </div>
          
          <div className="col-md-2 ">
            <div onClick={this.dropdownHandler.bind(this, "clothingShow")}> <img height="200px" src={clothingAddress}/> <figcaption>Clothing</figcaption>  </div>
              {clothingDropdown}
          </div>
          
          <div className="col-md-2">
            <div onClick={this.dropdownHandler.bind(this, "entertainmentShow")}> <img height="200px" src={entertainmentAddress}/> <figcaption>Entertainment</figcaption>  </div>
              {entertainmentDropdown}
          </div>
          
        </div>
      </div> 
    </div> 
    </div>
      )
   }
};

export default Home;