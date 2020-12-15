import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';

class YourCart extends Component {

    render() {
        const { selectedItems, USCurrencyFormat } = this.props;
        const total = Object.keys(selectedItems).reduce(
            (acc, curr) => acc + selectedItems[curr].cost, 0
        );

        return (
            <section className="main__summary">
                <h2>Your cart</h2>

                {
                    Object.keys(selectedItems).map((feature, idx) => {
                        const featureHash = feature + '-' + idx;
                        const selectedOption = selectedItems[feature];
                        return <CartItem selectedItems={selectedOption} 
                            featureHash={featureHash} 
                            selectedOption={selectedOption} 
                            USCurrencyFormat={USCurrencyFormat} />
                    })
                }
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        );
    }
}

export default YourCart;