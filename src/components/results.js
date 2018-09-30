import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardHolder from './presentation/cardHolder.js';
const screenValue = "On new page!";
const screenPrint = <h1> {screenValue} </h1>;




class ResultScreen extends React.Component{
   state = {
      items : [],
      body: {}
   }
   componentDidMount(){
      axios.get('https://9f6ha2nujg.execute-api.us-east-2.amazonaws.com/development?all=butts').then( res => {
         const body = res.data.body;
         this.setState({body});
         console.log(JSON.stringify(res));
      });
   }

   render(){
      return(
         <div>
            <p>{this.state.body.data}</p>
            <CardHolder />
         </div>
      )
   }
};

export default ResultScreen;