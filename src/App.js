import { useState, useEffect } from "react";
import './App.css';
import { Selection } from "./Selection.js";

export default function App() {
  const [data, setData] = useState({});
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    if (selection === null) return;

    const url =
      selection === "Search by Ingredient"
        ? "https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(salection)}"
        : selection === "Find a random recipe"
        ? "https://www.themealdb.com/api/json/v1/1/random.php"
        : null;

        fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, [selection]);
      
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Recibe!
      </header>

      {selection === null ? (
        //<p>Search for a recipe by ingredients you already have in your fridge, or search for a random recipe!<p/>
        <Selection/>
      ) : selection === "Search by ingredient" ? (
        <p>{data?.ingredient}</p>
      ) : selection === "Find a random recipe" ? (
        <p>{data?.meals}</p>
      ) : null}

      <selection setSelection={setSelection} />

    </div>
  );
}

