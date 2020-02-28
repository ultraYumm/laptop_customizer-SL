import React, { Component } from 'react';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOptions extends React.Component{
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    }
 
    handleChange(e) {
    const feature = e.target.value;
    const item = e.target.value;
  this.props.onChange(feature, item);
    }
  
  render() {

    

    return (
      <div className="feature__item">
      {this.props.options}
     
      <input
       type="radio"
       className="feature__option"
       checked = {this.props.checked}
       onChange= {this.handleChange}
       feature= {this.props.feature}
       item= {this.props.item}
       />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.label} ({USCurrencyFormat.format(this.props.cost)})
        </label>
    </div>)
 }
}

export default FeatureOptions;
 
