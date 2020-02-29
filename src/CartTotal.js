import React, { Component } from 'react';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class CartTotal extends React.Component{
  
  
  render() {

    
    return (
        
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
              
                {USCurrencyFormat.format(this.props.total)}
              </div>
            </div>)
 }
}

export default CartTotal;
 
/*<div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>*/