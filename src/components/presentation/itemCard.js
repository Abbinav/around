import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './itemCard.css';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import bike1 from './../../media/bikes/1.png';

//  <img src = "https://i.imgur.com/0QYhK8O.png"></img>

class ItemCardClass extends React.Component {
   constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
   this.setState({ rotation: this.state.rotation + 180 });
  }
  
  ItemCard2(props){
      console.log("\ninside itemCard\n");
      console.log(JSON.stringify(props));
      return(
       
         <div className="card card-custom">
            <div className = "test">
            <img className="card-img-top img-custom" src={props.photoURL} alt="card img top"/>
            
            <button type="button" className="btn btn-info" onClick={this.handleClick} >Review</button>
            </div>
            <div className="card-body">
               <h5 className="card-title">{props.name}</h5>
               <p className="card-text">{props.desc}</p>
               <div className="card-bottom-custom">
                  
                  <img src="https://i.imgur.com/Zu9eIjj.png" alt = "like button" className = "love-button"></img>
                  
                  <p className="inline-item">{props.date}</p>
               </div>
            </div>
         </div>
   );
 }
  
  render(){
   console.log(JSON.stringify(this.props))
   
 
     
   return (
      <div>
      <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div key="front">
               {this.ItemCard2(this.props)}
               
             </div>
   
             <div key = "back">
               {this.ItemCard2(this.props)}
               
             </div>
      </ReactCardFlip>
      </div>

    )
     
  }
   
}
ItemCardClass.propTypes = {
  styles: PropTypes.object
};

export default ItemCardClass;

   




