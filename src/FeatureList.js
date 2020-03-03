import React from "react";
import FeatureOptions from "./FeatureOptions";
import "./App.css";
import slugify from "slugify";


class FeatureList extends React.Component {
  render() {
    const options = this.props.features.map(feature => {
      const itemHash = slugify(JSON.stringify(feature));
      return (
        <FeatureOptions
          key = {itemHash}
          feature = {feature}
          featureTitle = {this.props.featureTitle}
          itemHash = {itemHash}
          name = {feature.name}
          cost = {feature.cost}
          updateFeature = {this.props.updateFeature}
          selected = {this.props.selected}
         />
      );
    });

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.featureTitle}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default FeatureList;

