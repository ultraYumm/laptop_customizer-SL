import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureOptions from './FeatureOptions'
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureList extends Component {
  render() {
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
  <div key={itemHash} className="feature__item"> Test 3
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
        </div>);
        });
      }};


   
export default FeatureList;
