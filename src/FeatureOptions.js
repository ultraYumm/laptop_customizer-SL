import React, { Component } from 'react';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOptions extends React.Component{
  

  //handleChange = {e => (this.props.onChange)}



  render() {

    

    return (
      <div className="feature__item">
      {this.props.options}
        <input
       type="radio"
       className="feature__option"
       feature= {this.props.feature}
       checked={this.props.checked}
       onChange ={this.props.onChange}
       updateFeature = {this.updateFeature}
       />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.name} ({USCurrencyFormat.format(this.props.cost)})</label>
    </div>)
 }
}

export default FeatureOptions;
 
