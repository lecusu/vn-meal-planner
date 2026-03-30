import React from 'react';

const ShoppingListDisplay = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="shopping-list-display">
            <h2>Shopping List</h2>
            <ul className="shopping-list">
                {items.map((item, index) => (
                    <li key={index} className="shopping-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-amount">
                            {item.amount} {item.unit}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingListDisplay;
