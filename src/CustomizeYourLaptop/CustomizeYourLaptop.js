import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import CustomizedItem from '../CustomizedItem/CustomizedItem';

class CustomizeYourLaptop extends Component {

    render() {
        const { selectedItems, features, updateFeature, USCurrencyFormat } = this.props;

        const featureCollection = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            const options = ( features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
                return (
                    <CustomizedItem itemHash={itemHash}
                        checked={item.name === selectedItems[feature].name}
                        name={item.name}
                        cost={item.cost}
                        feature={feature} 
                        updateFeature={updateFeature} 
                        USCurrencyFormat={USCurrencyFormat}/>
                );
            })
            );

            return (
            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
                {options}
            </fieldset>)
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                { featureCollection }
            </form>
        )
    }
}

export default CustomizeYourLaptop;