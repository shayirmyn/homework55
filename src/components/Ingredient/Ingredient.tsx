import React from 'react';

interface ICount {
    name: string,
    price: number,
    image: string,
    key: string,
    count: number,
    plusClick: (name: string) => void,
    minusClick: (name: string) => void,
    deleteClick: (name: string) => void,
}
const Ingredient: React.FC<ICount> = props => {

    return (
        <div className="mainIngredients">
            <div className="innerIngredients">
                <div className="blockIngredient">
                    <img className="image" src={props.image} alt="meat"/>
                    <span className="name">{props.name}</span>
                    <span className="count">x{props.count}</span>
                    <button className="btn" onClick={() => props.minusClick(props.name)}>-1</button>
                    <button className="btn" onClick={() => props.plusClick(props.name)}>+1</button>
                    <button className="btn" onClick={() => props.deleteClick(props.name)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default Ingredient;