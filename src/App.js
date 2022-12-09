import { useState, useEffect } from "react";
import "./App.css";
import { Selection } from "./Selection.js";

export default function App() {
  const [data, setData] = useState({});
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    if (selection === null) return;

    console.log(selection);
    const url =
      selection === "Find a random recipe"
        ? "https://www.themealdb.com/api/json/v1/1/random.php"
        : `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
            selection
          )}`;

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch((e) => setData(e));
  }, [selection]);

  return (
    <div className="App">
      <header className="App-header" onClick={() => setSelection(null)}>
        Welcome to Recibe!
      </header>

      {selection === null ? (
        <div>
          <p>
            Click the button to generate a random recipe, or search recipe by
            ingredient!
          </p>
          <Selection setSelection={setSelection} />
        </div>
      ) : selection === "Find a random recipe" ? (
        <Meal data={data} />
      ) : (
        <SearchResults data={data} />
      )}
    </div>
  );
}

function Meal({ data }) {
  return (
    <div>
      <p>We've selected this for you:</p>
      <h2>{data?.meals?.[0]?.strMeal}</h2>
      <p className="area">{data?.meals?.[0]?.strArea}</p>
      <img alt="pic" width="300" src={data?.meals?.[0]?.strMealThumb} />
      <pre className="instructions">{data?.meals?.[0]?.strInstructions}</pre>
    </div>
  );
}

function SearchResults({ data }) {
  return !data ? (
    <p>Searching...</p>
  ) : !data?.meals ? (
    <p>No results</p>
  ) : (
    <div>
      {data?.meals?.map((meal) => (
        <div>
          <p>{meal.strMeal}</p>
          <p>
            <img alt="pic" width="300" src={meal.strMealThumb} />
          </p>
        </div>
      ))}
    </div>
  );
}
