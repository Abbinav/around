import React from 'react';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import './ItemPage.css';


export default class Navbar extends React.Component{
   render(){
      return(
         <div className="row ">
            <div className="col-sm-8">
               <img src = "https://i.imgur.com/7uxjq0J.jpg" className = "item"></img>
            </div>
            <div className="col-sm-4 d-block overallContainer">
               <div className="row">
                  <h1 className = "row name d-flex">Gameboy</h1>
               </div>
               <div className="row">
                  <h3>Used, Grey Gameboy</h3>
               </div>
               <div className="row">
               <button type="button" className="btn btn-danger btn-lg">Buy Now</button>
               <img src="https://i.imgur.com/Zu9eIjj.png" alt = "like button" className = "like-button"></img>
               </div>
               
            </div>
         </div>
         );
   }
};