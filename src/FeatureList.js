import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureOptions from './FeatureOptions'
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

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
            options = {this.props.options}
            id= {this.props.id}
            name= {this.props.name}
            checked = {this.props.checked}
            onChange= {this.props.onChange}
            label= {this.props.label}
            itemHash = {this.props.itemHash} 
            cost = {this.props.cost}
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


/*render() {
  const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.state.selected[feature].name}
            onChange={e => this.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  })};*/