import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './itemCard';
import './cardHolder.css'; 

class CardHolder extends React.Component{
   state = {
      items : []
      
 /*
 items: [
         {name: "test Item1", date: "9-12-18", desc: "A shiny new item!A shiny new item!A shiny new item!A shiny new item!", condition: "Poor"},
         {name: "test Item2", date: "9-12-18", desc: "A shiny new item!", condition: "New"},
         {name: "test Item3", date: "9-12-18", desc: "A shiny new item!", condition: "Used"},
         {name: "test Item4", date: "9-12-18", desc: "A shiny new item!", condition: "Like New"}
      ]
*/
   }
//current goals: list all the items in rows of 4, descending down the screen  
//Implementation plan:   
//   1) have function in this class, that counts the number of items in state.items, and determines the # of rows we need
//   2) 
//In Future: query dynamoDB for items and fill up the state.items object with the query results


   componentDidMount(){
      const items = this.state.props;
      this.setState({items});
   }

//{"items":[{"name":"Bike","description":"Blue new shiny bike","price":69.99,"photoURL":"https://www.apple.com/shop/buy-homepod/homepod/white","location":"Ventura,CA","itemId":1,"date":"2018-01-04"}]}
/*
const itemCards = this.state.items.map(item => {
         return <ItemCard name={item.name} desc={item.description} views={0} />
      })
*/

   render(){
      console.log(JSON.stringify(this.state));
      console.log(JSON.stringify(this.props));
      
      
      return(
         <div className="card-holder">
            <div>
               
            </div>
         </div>
      );
   }
}

export default CardHolder;