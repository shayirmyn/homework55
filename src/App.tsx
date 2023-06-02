import React, { useState } from "react";
import Ingredient from "./components/Ingredient/Ingredient";
import meatImage from "./assets/meat.png";
import { nanoid } from "nanoid";
import cheeseImage from "./assets/cheese.png";
import baconImage from "./assets/becon.png";
import saladImage from "./assets/salad.png";
import Burger from "./components/Burger/Burger";
import "./App.css";

type Ingredient = {
  name: string;
  price: number;
  image: string;
  id: string;
};

const INGREDIENTS: Ingredient[] = [
  { name: "Meat", price: 80, image: meatImage, id: nanoid() },
  { name: "Cheese", price: 50, image: cheeseImage, id: nanoid() },
  { name: "Bacon", price: 60, image: baconImage, id: nanoid() },
  { name: "Salad", price: 10, image: saladImage, id: nanoid() },
];

const App = () => {
  type Count = {
    name: string;
    count: number;
  };

  const [ingredientsUseState, setIngredientsUseState] = useState<Count[]>([
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Bacon", count: 0 },
    { name: "Salad", count: 0 },
  ]);

  const [priceCount, setPiceCount] = useState(30);

  const countPlus = (name: string) => {
    setIngredientsUseState((prevState) => {
      return prevState.map((thing, index) => {
        if (thing.name === name) {
          setPiceCount((prevState) => prevState + INGREDIENTS[index].price);
          return {
            ...thing,
            count: thing.count + 1,
          };
        }
        return thing;
      });
    });
  };

  const countMinus = (name: string) => {
    setIngredientsUseState((prevState) => {
      return prevState.map((thing, index) => {
        if (thing.name === name) {
          if (thing.count > 0) {
            setPiceCount((prevState) => prevState - INGREDIENTS[index].price);
            return {
              ...thing,
              count: thing.count - 1,
            };
          }
        }
        return thing;
      });
    });
  };

  const showIngredients = INGREDIENTS.map((every, index) => {
    return (
      <Ingredient
        name={every.name}
        price={every.price}
        image={every.image}
        key={every.id}
        count={ingredientsUseState[index].count}
        plusClick={countPlus}
        minusClick={countMinus}
      />
    );
  });

  return (
    <div className="App">
      {showIngredients}
      <Burger price={priceCount} countState={ingredientsUseState} />
    </div>
  );
};

export default App;
