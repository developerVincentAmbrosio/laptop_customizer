import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const { featureName, selectedOption, USCurrencyFormat } = this.props;

        return (
            <div className="summary__option">
                <div className="summary__option__label">{featureName} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default CartItem;