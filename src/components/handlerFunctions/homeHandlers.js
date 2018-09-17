import React from 'react';

export const transportationClickHandler = () => {
    const displayBool = !this.state.transportationShow;
    this.setState({
      transportationShow : displayBool,
      booksShow : false,    housingShow : false,    electronicsShow : false,    clothingShow : false,    entertainmentShow : false
    });
}