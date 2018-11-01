import React from 'react';
import { Link } from 'react-router-dom';
import './results.css';
import axios from 'axios';
import CardHolder from './presentation/cardHolder.js';
const screenValue = "On new page!";
const screenPrint = <h1> {screenValue} </h1>;



class ResultScreen extends React.Component{
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

   render(){
      const printMe = this.state.body;
      //console.log("INSIDE RESULTS, STATE = " + JSON.stringify(this.state));
      return(
         <div>
            <CardHolder items={this.state.body}/>
         </div>
      )
   }
};

export default ResultScreen;