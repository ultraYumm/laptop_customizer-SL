import React from 'react'

export default function FeatureOptions(props) {
  return (
    <div> Details
      <input
              type="radio"
            />
            <label> 
             </label>
        
    </div>
  )
}

FeatureOptions.defaultProps = {
  item: {}
}


/*<div key={itemHash} className="feature__item"> Test 3
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
        );*/