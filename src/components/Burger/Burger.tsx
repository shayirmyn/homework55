import React from 'react';

type Count = {
    name: string,
    count: number,
};
interface IBurger {
    price: number,
    countState: Count[],
}
const Burger: React.FC<IBurger> = props => {

    return (
            <div className="burgerBlock">
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    {
                        props.countState.map(every => {
                            const ingsArr : React.ReactNode[] = [];
                            for (let i = 0; i < every.count; i++) {
                                ingsArr.push(<div className={every.name}></div>);
                            }
                            return ingsArr;
                        })
                    }
                    <div className="BreadBottom"></div>
                </div>
                <p>
                    <strong>Price: {props.price} KGS</strong>
                </p>
            </div>
    );
};

export default Burger;