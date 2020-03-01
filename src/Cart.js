import React, { Component } from 'react';
import './App.css';

class Cart extends React.Component {
  
  
  render() {

      return (
        <div className="summary__option">
        <div className="summary__option__label">{this.props.summary}{this.props.featureTitle} </div>
        <div className="summary__option__value">{this.props.selected}</div>
        <div className="summary__option__cost">
          {this.props.cost}
        </div>
        </div>

    );
  }
}

export default Cart;

 