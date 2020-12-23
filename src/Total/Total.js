import React, { Component } from 'react';

class Total extends Component {
    render() {
        const { selectedItems, USCurrencyFormat } = this.props;
            const total = Object.keys(selectedItems).reduce(
                (acc, curr) => acc + selectedItems[curr].cost, 0
        );

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
    )}
}

export default Total;