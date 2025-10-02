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

useEffect(() => {
  getNextDrink();
}, []);

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
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button className="button newdrink" onClick={onNewDrink}>
          🔄
        </button>
      </div>
      <h3>Temperature</h3>
      <form action="">
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
