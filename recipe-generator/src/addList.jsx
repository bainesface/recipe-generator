import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default function List(props) {
  const { ingredients } = props;
  return (
    <ul>
      {ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>;
      })}
    </ul>
  );
}
