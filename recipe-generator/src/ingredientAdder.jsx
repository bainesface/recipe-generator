import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class IngredientAdder extends React.Component {
  state = {
    ingredientInput: ""
  };

  render() {
    const { ingredientInput } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          What ingredients do you have?
          <input
            type="text"
            value={ingredientInput}
            placeholder="add ingredient"
            name="ingredientInput"
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit ingredient</button>
      </form>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ ingredientInput: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { ingredientInput } = this.state;
    this.props.addIngredients(ingredientInput);
    this.setState({ ingredientInput: "" });
  };
}
