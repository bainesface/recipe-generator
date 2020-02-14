import React from "react";
import "./App.css";

export default function Recipes(props) {
  const { recipes } = props;
  return (
    <ul>
      {Object.keys(recipes).map(recipe => {
        return (
          recipes[recipe].screenView === "visible" && (
            <li key={recipes[recipe].name}>
              <h3>{recipes[recipe].name}</h3>
              <img src={recipes[recipe].url} />
              <p>{recipes[recipe].ingredients}</p>
              <p>{recipes[recipe].method}</p>
            </li>
          )
        );
      })}
    </ul>
  );
}
