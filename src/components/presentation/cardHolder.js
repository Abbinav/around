import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './itemCard';
import './cardHolder.css'; 
import Modal from './modal.js';

//current goals: list all the items in rows of 4, descending down the screen  
//Implementation plan:   
//   1) have function in this class, that counts the number of items in state.items, and determines the # of rows we need
//   2) 
//In Future: query dynamoDB for items and fill up the state.items object with the query results


const CardHolder = props => {
   
   let itemCards = null;
   if(props.items.length > 0){
      itemCards = props.items.map(item => {
            //console.log("ITEM = " + JSON.stringify(item));
            return <ItemCard name={item.name} desc={item.description} views={0} date={item.date}
            photoURL={item.photoURL} price={item.price} loc={item.location} key={item.itemId}/>
         });
   }
//{"items":[{"name":"Bike","description":"Blue new shiny bike","price":69.99,"photoURL":"https://www.apple.com/shop/buy-homepod/homepod/white","location":"Ventura,CA","itemId":1,"date":"2018-01-04"}]}

      return(
         <div >
            <div className="card-holder">
               {itemCards}
            </div>
         </div>
      );
}

export default CardHolder;