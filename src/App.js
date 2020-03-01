import React, { Component } from "react";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import FeatureList from "./FeatureList";
import Cart from "./Cart";
import CartTotal from "./CartTotal";

import "./App.css";
import FEATURES from "./FEATURES";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    console.log("This is updateFeature");
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const featureLists = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const features = FEATURES[feature];

      return (
        <FeatureList
          featureHash={featureHash}
          featureTitle={feature}
          features={features}
          updateFeature={this.updateFeature}
          selected={this.state.selected}
        />
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <Cart
          key={featureHash}
          featureTitle={feature}
          selected={selectedOption.name}
          cost={USCurrencyFormat.format(selectedOption.cost)}
        />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {featureLists}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <CartTotal total={total} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
