import React from 'react';

interface IBurger {
    price: number
}
const Burger: React.FC<IBurger> = props => {

    return (
        <div className="burgerBlock">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="Cheese"></div>
                <div className="Bacon"></div>
                <div className="Meat"></div>
                <div className="Salad"></div>
                <div className="BreadBottom"></div>
            </div>
            <p>
                <strong>Price: {props.price} KGS</strong>
            </p>
        </div>
    );
};

export default Burger;