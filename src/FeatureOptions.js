import React, { Component } from 'react';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOptions extends React.Component{
  render() {

    return (
      <div className="feature__item">
      {this.props.options}
      <input
       type="radio"
       id= {this.props.id}
       className="feature__option"
       name= {this.props.name}
       checked = {this.props.checked}
       onChange= {this.props.onChange}
       />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.label} ({USCurrencyFormat.format(this.props.cost)})
        </label>
    </div>)
 }
}

export default FeatureOptions;
 
