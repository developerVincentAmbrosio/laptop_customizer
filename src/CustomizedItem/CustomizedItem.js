import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class CustomizedItem extends Component {
    render() {
        const { name, cost, checked, feature, itemHash, updateFeature, USCurrencyFormat } = this.props;

        return (
            <div className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={checked}
                onChange={e => updateFeature(feature, { name, cost })}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {name} ({USCurrencyFormat.format(cost)})
                </label>
            </div>
        );
    }
}

export default CustomizedItem;