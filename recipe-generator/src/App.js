import React from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientAdder from './ingredientAdder';
import List from './addList';

class App extends React.Component {
  state = {
    ingredients: [],
    recipes: {
      Recipe1: {
        name: 'New Potato and Red Onion Flatbreads',
        ingredients: [
          'onion',
          'potato',
          'thyme',
          'flatbreads',
          'creme fraiche',
          'cheese'
        ],
        method:
          ' Bring a pan of salted water to a boil. Put a frying pan on a medium heat, add a little olive oil and the sliced onions, and cook for about 10 minutes, until soft and sweet. Slice the potatoes as thinly as you can – you could use a mandoline here. Blanch the sliced potatoes in the boiling water for about two to three minutes, until they have lost their rawness but still hold their shape. Drain and leave to steam dry, then toss with the thyme, some salt and pepper, and a couple of tablespoons of olive oil. Lay the flatbreads on a baking tray and heat the oven to 200C/390F/gas 6. Spread the creme fraiche or ricotta over the breads, top with the onions, then the potatoes, and finish with a good grating of parmesan. Cook for eight to 10 minutes, until everything has melted together.',
        screenView: 'invisible'
      },
      Recipe2: {
        name: 'Banana Pancakes',
        ingredients: [
          'oats',
          'nuts',
          'baking powder',
          'banana',
          'milk',
          'berries',
          'honey'
        ],
        method:
          'First turn the oven to 120°C/fan 100°C/gas 1⁄2 to keep everything warm. Blitz the oats until you have a scruffy oat flour. Add to a bowl with the pecans and throw in the baking powder and salt. Mix the mashed banana with the milk (you can do this by blitzing them together in the food processor, if you like). Beat the banana mixture into the flour and leave the batter to sit for a few minutes. Heat a non-stick pan on a medium heat, then add the banana slices and fry on both sides in the dry pan until brown and caramelised. Keep warm in the oven. Put the pan back on a medium heat and add a little coconut oil or butter. Drop in a healthy tablespoonful of batter for each pancake. Once the sides are cooked and bubbles have risen to the top, scatter over a handful of blueberries and flip the pancake over. Cook for another couple of minutes on the other side. The pancakes will stay a little moist in the middle because of the banana, so don’t worry. Keep them warm in the oven while you cook the rest. Serve the pancakes piled with the banana slices. Add some crumbled pecans and a squeeze of lime, and, if you like, a little touch of honey, agave or maple syrup.',
        screenView: 'invisible'
      }
      // Recipe3: { name: '', ingredients: [], method: '' },
      // Recipe4: { name: '', ingredients: [], method: '' },
      // Recipe5: { name: '', ingredients: [], method: '' }
    }
  };

  render() {
    const { addIngredients } = this;
    const { ingredients } = this.state;
    return (
      <main>
        <header>
          <h1>What shall you eat???</h1>
        </header>
        <IngredientAdder addIngredients={addIngredients} />
        <List ingredients={ingredients} />
      </main>
    );
  }

  addIngredients = input => {
    this.setState(currentState => {
      return { ingredients: [...currentState.ingredients, input] };
    });
  };
}

export default App;
