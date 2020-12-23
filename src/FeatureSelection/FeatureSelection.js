import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import CustomizedItem from '../CustomizedItem/CustomizedItem';

class FeatureSelection extends Component {

    render() {
        const { selectedItems, features, feature, updateFeature, USCurrencyFormat } = this.props;

        return ( 
            <fieldset className="feature">
             <legend className="feature__name">
                 <h3>{feature}</h3>
             </legend>
            {features[feature].map((item, itemIndex) => {
                let itemHash = slugify(JSON.stringify(item));

                return <CustomizedItem 
                    key={`${itemHash}-${itemIndex}`}
                    checked={item.name === selectedItems[feature].name}
                    name={item.name}
                    cost={item.cost}
                    feature={feature} 
                    updateFeature={updateFeature} 
                    USCurrencyFormat={USCurrencyFormat}
                />
                })
            }
            </fieldset>
        );
    }
}

export default FeatureSelection;