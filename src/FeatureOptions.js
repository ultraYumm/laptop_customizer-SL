import React from 'react';
import './App.css';
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOptions extends React.Component {
  render() {
    return (
      <div className="feature__item" key={this.props.itemHash}>
        {this.props.options}
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.featureTitle)}
          checked={
            this.props.feature.name ===
            this.props.selected[this.props.featureTitle].name
          }
          onChange={e =>
            this.props.updateFeature(
              this.props.featureTitle,
              this.props.feature
            )
          }
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureOptions;
