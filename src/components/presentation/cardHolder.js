import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './itemCard';
import './cardHolder.css'; 

class CardHolder extends React.Component{
   state = {
      items: [
         {name: "test Item1", date: "9-12-18", desc: "A shiny new item!A shiny new item!A shiny new item!A shiny new item!", condition: "Poor"},
         {name: "test Item2", date: "9-12-18", desc: "A shiny new item!", condition: "New"},
         {name: "test Item3", date: "9-12-18", desc: "A shiny new item!", condition: "Used"},
         {name: "test Item4", date: "9-12-18", desc: "A shiny new item!", condition: "Like New"}
      ]
   }
//current goals: list all the items in rows of 4, descending down the screen  
//Implementation plan:   
//   1) have function in this class, that counts the number of items in state.items, and determines the # of rows we need
//   2) 
//In Future: query dynamoDB for items and fill up the state.items object with the query results

   render(){
      
      return(
         <div className="card-holder">
            <ItemCard 
            name={this.state.items[0].name}
            date={this.state.items[0].date}
            desc={this.state.items[0].desc}
            views={this.state.items[0].condition}
            />
            <ItemCard 
            name={this.state.items[1].name}
            date={this.state.items[1].date}
            desc={this.state.items[1].desc}
            views={this.state.items[1].condition}
            />
            <ItemCard 
            name={this.state.items[2].name}
            date={this.state.items[2].date}
            desc={this.state.items[2].desc}
            views={this.state.items[2].condition}
            />
            <ItemCard 
            name={this.state.items[3].name}
            date={this.state.items[3].date}
            desc={this.state.items[3].desc}
            views={this.state.items[3].condition}
            />
            
            <div>
               {this.state.items.map(item =>{
                  return <ItemCard name = {item.name} date = {item.date} desc = {item.desc} views = {item.views} />
               })}
            </div>
         </div>
      );
   }
}

export default CardHolder;