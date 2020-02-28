import React, { Component } from 'react';
import './App.css';
import CartTotal from './CartTotal'

class Cart extends React.Component {
  
  
  render() {

      return (
        <div className="summary__option">
        <div className="summary__option__label">{this.props.summary}{this.props.feature} </div>
        <div className="summary__option__value">{this.props.selected}</div>
        <div className="summary__option__cost">
          {this.props.cost}
        </div>
        <CartTotal 
        total= {this.props.total} />
      </div>

    );
  }
}

export default Cart;

 