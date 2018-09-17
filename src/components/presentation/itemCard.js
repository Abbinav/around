import React from 'react';
import { Link } from 'react-router-dom';
import './itemCard.css';
const ItemCard = props => {
   return(
      <div className="card card-custom">
         <img className="card-img-top img-custom" src='https://i.imgur.com/qOq3DU2.png' alt="card img top"/>
         <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <div className="card-bottom-custom">
               <button className="inline-item card-button">Review</button>
               <p className="inline-item">{props.date}</p>
            </div>
         </div>
      </div>
   );
}

export default ItemCard;