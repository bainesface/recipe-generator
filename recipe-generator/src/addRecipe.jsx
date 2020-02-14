import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function Recipes(props) {
  const { recipes } = props;
  return (
    <ul>
      {Object.keys(recipes).map(recipe => {
        return (
          recipes[recipe].screenView === 'visible' && (
            <li key={recipes[recipe].name}>
              {recipes[recipe].name} \br {recipes[recipe].ingredients}
            </li>
          )
        );
      })}
    </ul>
  );
}
