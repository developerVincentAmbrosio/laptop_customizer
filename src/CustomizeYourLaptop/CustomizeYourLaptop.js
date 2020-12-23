import React, { Component } from 'react';
import FeatureSelection from '../FeatureSelection/FeatureSelection';

class CustomizeYourLaptop extends Component {

    render() {
        const { selectedItems, features, updateFeature, USCurrencyFormat } = this.props;

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                { Object.keys(features).map((feature, featureIndex) => 
                    <FeatureSelection
                        key={`${feature}-${featureIndex}`}
                        selectedItems={selectedItems}
                        features={features}
                        feature={feature}
                        updateFeature={updateFeature} 
                        USCurrencyFormat={USCurrencyFormat} 
                    />)}
            </form>
        )
    }
}

export default CustomizeYourLaptop;