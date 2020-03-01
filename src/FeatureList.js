import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions';
import './App.css';
import slugify from 'slugify';




    class FeatureList extends React.Component {
      render() {
        const options = this.props.features.map(feature => {
          const itemHash = slugify(JSON.stringify(feature));
          return <FeatureOptions
          feature={this.props.featureTitle}
          key={itemHash}
          name={feature.name}
          cost={feature.cost}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          checked={feature.name === this.props.selected}
          onChange={e => this.props.updateFeature}
          />;
        });
    
        return (
          <fieldset className="feature">
            <legend className="feature__name">
              <h3>{this.props.featureTitle}</h3>
            </legend>
            {options}
          </fieldset>
        );
      }
    }
     
    

export default FeatureList;

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
    });*/