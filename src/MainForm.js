import React from "react";
import "./App.css";
import FeatureList from "./FeatureList";
import FEATURES from "./FEATURES";




class MainForm extends React.Component {

    
  render() {
    const featureLists = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const features = FEATURES[feature];
        
        return (
            
          <FeatureList
            key = {featureHash}
            featureHash = {featureHash}
            featureTitle = {feature}
            features = {features}
            updateFeature = {this.props.updateFeature}
            selected = {this.props.selected}
          />
        );
      });

       return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {featureLists}
       </form>
       );
    }

    
}

export default MainForm;

