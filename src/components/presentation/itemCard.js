import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemCard.css';
import bike1 from './../../media/bikes/1.png';

//  <img src = "https://i.imgur.com/0QYhK8O.png"></img>

const ItemCard = props => {
   console.log("\ninside itemCard\n");
   console.log(JSON.stringify(props));
   return(
    
      <div className="card card-custom">
         <img className="card-img-top img-custom" src={props.photoURL} alt="card img top"/>
         <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <div className="card-bottom-custom">
               <button type="button" className="btn btn-info">Review</button>
               <img src="https://i.imgur.com/Zu9eIjj.png" alt = "like button" className = "like-button"></img>
               
               <p className="inline-item">{props.date}</p>
            </div>
         </div>
      </div>
   );
}

export default ItemCard;