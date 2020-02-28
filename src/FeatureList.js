import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions';
import './App.css';



class FeatureList extends React.Component{

   

  render() {

    

     return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>
            {this.props.features}
            {this.props.feature} 
           </h3>
        </legend>
           <FeatureOptions
            laptopOptions = {this.props.laptopOptions}
            options = {this.props.options}
            id= {this.props.id}
            name= {this.props.name}
            checked = {this.props.checked}
            onChange= {this.props.onChange}
            label= {this.props.label}
            itemHash = {this.props.itemHash} 
            cost = {this.props.cost}
            features = {this.props.features}
            feature = {this.props.feature} 
            item = {this.props.item} 
          />
      </fieldset>)
  }
}

export default FeatureList;
  

/*<div className="feature__item">
        {this.props.features}
        {this.props.feature}
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
      </div>*/

