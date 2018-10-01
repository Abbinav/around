import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardHolder from './presentation/cardHolder.js';
const screenValue = "On new page!";
const screenPrint = <h1> {screenValue} </h1>;




class ResultScreen extends React.Component{
   state = {
      body: {}
   }
   componentDidMount(){
      axios.get('https://9f6ha2nujg.execute-api.us-east-2.amazonaws.com/development/results?all=butts').then( res => {
         const body = res.data;
         this.setState({body});
        // console.log("this.state = " + JSON.stringify(this.state));
        // console.log("this.props = " + JSON.stringify(this.props));
        // console.log("res = " + JSON.stringify(res));
      });
   }

   render(){
      const printMe = this.state.body;
      return(
         <div>
            <CardHolder items={this.state.body}/>
         </div>
      )
   }
};

export default ResultScreen;