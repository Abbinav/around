import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './results.css';
import axios from 'axios';
import Navbar from './navbar/navbar';
import CardHolder from './presentation/cardHolder.js';




class ResultScreen extends React.Component{
    constructor(props) {
        super(props);
        this.reloadPage = this.reloadPage.bind(this);
    }
   state = {
      body: {}
   }
   componentDidMount(){
      const urlTotal = window.location.href;
      const urlPartial = urlTotal.split("/");
      const reqParam = urlPartial[urlPartial.length - 1];
      console.log(JSON.stringify(reqParam));
      const reqString = 'https://9f6ha2nujg.execute-api.us-east-2.amazonaws.com/development/results?all=' + reqParam;
      axios.get(reqString).then( res => {
         const body = res.data;
         this.setState({body});
         console.log("\nREQUEST COMPLETED\n");
        // console.log("this.state = " + JSON.stringify(this.state));
        // console.log("this.props = " + JSON.stringify(this.props));
        // console.log("res = " + JSON.stringify(res));
      });
      
    
   }
   stateSetter(body) {
       this.setState({body})
   }
   
   reloadPage () {
      const urlTotal = window.location.href;
      const urlPartial = urlTotal.split("/");
      const reqParam = urlPartial[urlPartial.length - 1];
      console.log("reqparam: " + JSON.stringify(reqParam));
      const reqString = 'https://9f6ha2nujg.execute-api.us-east-2.amazonaws.com/development/results?all=' + reqParam;
      axios.get(reqString).then( res => {
         const body = res.data;
         this.setState({body});
         console.log("CURRENT STATE:" + JSON.stringify(this.state))
         console.log("\nREQUEST COMPLETED\n");
      });   
      
   
   }
   
   categoryDropdown(props){
      return(
       <ul className="list">
            
               <h3>Categories</h3>
              <li className="list-group-item" onClick = {() => this.reloadPage()}>
                 <NavLink   to = {"/results/bike"} activeClassName="active">Bikes </NavLink> 
              </li>
              <li className="list-group-item " onClick = {() => this.reloadPage()}><NavLink to={"/results/car"}  activeClassName="active" >
                     Cars
              </NavLink> </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}>
                 <NavLink to = {"/results/ride"} activeClassName="active">Ride-Sharing</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}>
                 <NavLink to = {"/results/textbook"} activeClassName="active">Textbooks</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}>
                 <NavLink to = {"/results/non-fiction"} activeClassName="active">Non-Fiction</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/fiction"} activeClassName="active">Fiction</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/apartments"} activeClassName="active">Apartments</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/room"} activeClassName="active">Room</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/house"} activeClassName="active">House</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/tool"} activeClassName="active">Tools</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/technology"} activeClassName="active">Technology</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/household"} activeClassName="active">Household</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/women"} activeClassName="active">Women</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/men"} activeClassName="active">Men</NavLink> 
              </li>
              <li className="list-group-item" onClick = {() => this.reloadPage()}> 
                 <NavLink to = {"/results/kids"} activeClassName="active">Kids</NavLink> 
              </li>
              
             </ul>
            
            );
    }
    
    filters(props){
        
       return(
       <div class="input-group">
             <div class="input-group-prepend">
                <span class="input-group-text" id="">First and last name</span>
             </div>
             <input type="text" class="form-control"></input>
             <input type="text" class="form-control"></input>
            </div> 
            ); 
    }
   render(){
      //console.log("INSIDE RESULTS, STATE = " + JSON.stringify(this.state));
      return(
         <div>
            
            <Navbar reload={this.reloadPage}/>
            
            <div className = "row">
       
             
            {this.categoryDropdown(this.props)}
             
                
            <CardHolder items={this.state.body}/>
                
            </div>
         </div>
      )
   }
};

export default ResultScreen;