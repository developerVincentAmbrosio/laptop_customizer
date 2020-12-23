import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';

class YourCart extends Component {

    render() {
        const { selectedItems, USCurrencyFormat } = this.props;

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {
                    Object.keys(selectedItems).map((featureName, selectedItemIndex) => {
                        return <CartItem 
                            key={`${featureName}-${selectedItemIndex}`}
                            featureName={featureName}
                            selectedOption={selectedItems[featureName]}
                            USCurrencyFormat={USCurrencyFormat} />
                    })
                }
            <Total selectedItems={selectedItems} USCurrencyFormat={USCurrencyFormat}/>    
            </section>
        );
    }
}

export default YourCart;