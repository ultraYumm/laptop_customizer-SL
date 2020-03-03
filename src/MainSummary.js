import React from "react";
import "./App.css";
import Cart from "./Cart";
import CartTotal from "./CartTotal";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });



class MainSummary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.selected[feature];
  
        return (
          <Cart
            key = {featureHash}
            featureTitle = {feature}
            selected = {selectedOption.name}
            cost = {USCurrencyFormat.format(selectedOption.cost)}
           />
        );
      })

       return (
        <section className="main__summary">
          <h2>Your cart</h2>
           {summary}
           <CartTotal
           selected = {this.props.selected}/>
        </section>
       );
    }

    
}

export default MainSummary




            

           