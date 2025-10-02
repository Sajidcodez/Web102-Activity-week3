import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../data/drinks.json";

const onCheckAnswer = () => {};

const getNextDrink = () => {
  let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
  setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
  setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
};

const onNewDrink = () => {
  setInputs({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  getNextDrink();
};

const [inputs, setInputs] = useState({
  temperature: "",
  milk: "",
  syrup: "",
  blended: "",
});

const ingredients = {
  temperature: ["hot", "lukewarm", "cold"],
  syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
  milk: ["cow", "oat", "goat", "almond", "none"],
  blended: ["yes", "turbo", "no"],
};

const BaristaForm = () => {
  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="mini-header">{currentDrink}</div>
      {
        constructor(parameters) {
          
        }
      }
      <div className="drink-r"
      <form action="">
        <h3>Temperature</h3>
        <div className="answer-space">{inputs["temperature"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="temperature"
          choices={ingredients["temperature"]}
          checked={inputs["temperature"]}
        />
      </form>
      <button className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button className="button submit" onClick={onNewDrink}>
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;
