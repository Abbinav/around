// Dependencies 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemCard.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Components
import ReactCardFlip from 'react-card-flip';
import { Carousel } from 'react-responsive-carousel';

// Resources
import bike1 from './../../media/bikes/1.png';

//  <img src = "https://i.imgur.com/0QYhK8O.png"></img>

class ItemCardClass extends React.Component {
   constructor() {
    super();
    this.state = {
      isFlipped: false,
      likeButton: "https://i.imgur.com/Zu9eIjj.png",
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);

  }
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
   this.setState({ rotation: this.state.rotation + 180 });
  }
  
  toggleIcon(){
      if(this.state.likeButton === 'https://i.imgur.com/Zu9eIjj.png')
         this.setState({likeButton:'https://i.imgur.com/W4z0ncv.png'})
     else
         this.setState({likeButton:'https://i.imgur.com/Zu9eIjj.png'})
  }
  
  
  ItemCardFront(props){
      console.log("\ninside itemCard\n");
      console.log(JSON.stringify(props));
 
      const state = this.state;
      const {
         isFlipped
      } = state;
      
      return(
       
       <div className={cx('card card-custom', {'card-hide': isFlipped})}>
       <div>
         <Carousel>
               
                <div className = "test">
                     <img className="card-img-top" src={props.photoURL} alt="card img top"/>
                     <button type="button" className="btn btn-info" onClick={this.handleClick} >Review</button>
                     
               </div>
               
               
                <div>
                   <img className="card-img-top" src={props.photoURL} alt="card img top"/>
                     <button type="button" className="btn btn-info" onClick={this.handleClick} >Review</button>
                    
                </div>
                <div>
                   <img className="card-img-top" src={props.photoURL} alt="card img top"/>
                     <button type="button" className="btn btn-info" onClick={this.handleClick} >Review</button>
                   
                </div>
            </Carousel>
         </div>
         
         <div className="card-body-front">
               <h5 className="card-title">{props.name}</h5>
               
                  
                  <img src={this.state.likeButton} alt = "like button" className = "love-button" onClick = {this.toggleIcon}></img>
                  
               </div>
            
      </div>
      
         // <div className="card card-custom">
          
          
         //    <div className = "test">
            
               
         //    <img className="card-img-top img-custom" src={props.photoURL} alt="card img top"/>
         //    <button type="button" className="btn btn-info" onClick={this.handleClick} >Review</button>
         //    </div>
         
         //    <div className="card-body">
         //       <h5 className="card-title">{props.name}</h5>
               
                  
         //          <img src={this.state.likeButton} alt = "like button" className = "love-button" onClick = {this.toggleIcon}></img>
                  
         //          <p className="inline-item">{props.date}</p>
         //       </div>
            
            
         // </div>
   );
 }
  
  ItemCardBack(props){
      console.log("\ninside itemCard\n");
      console.log(JSON.stringify(props));
      return(
       
         <div className="card card-custom">
            <div className = "test">
            <img className="card-img-top img-custom" src={props.photoURL} alt="card img top"/>
            
            <button type="button" className="btn btn-info" onClick={this.handleClick} >Review</button>
            </div>
            <div className="card-body">
               <p className="card-text">{props.desc}</p>
               <div className="card-bottom-custom">
                  
                  
                  <p className="inline-item">{props.date}</p>
               </div>
            </div>
         </div>
   );
 }
  
  render(){
   console.log(JSON.stringify(this.props))
 
     
   return (
      <div className = "react-card">
      <ReactCardFlip isFlipped={this.state.isFlipped}>
            
         <div key="front">
            {this.ItemCardFront(this.props)}
         </div>
         <div key = "back">
            {this.ItemCardBack(this.props)}
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

   




