//TODO

{/* <div>
  <h2 class = "header">Cocktails</h2>
  <div class = "list">
    <div class = "listItem"></div>
  </div>
</div> */}

import React from 'react';
import List from './List.jsx';
import Favorites from './Favorites.jsx';
import dummy from '../../../public/data/dummy.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      favoriteDrinks: []
    }
  }
  componentDidMount() {
    this.setState({
      drinks: dummy.drinks
    })
  }
  handleClick(drink) {
    this.setState({
      favoriteDrinks: [...this.state.favoriteDrinks, drink]
    })
  }
  removeFavoriteDrinkOnClick(drink) {
    this.setState({
      favoriteDrinks: this.state.favoriteDrinks.filter((favoriteDrink) => (
        favoriteDrink.idDrink !== drink.idDrink
      ))
    })
  }
  render() {
    return(
      <div>
        <h2>Cocktails</h2>
        <Favorites removeFavoriteDrink={this.removeFavoriteDrinkOnClick.bind(this)} favoriteDrinks={this.state.favoriteDrinks}/>
        <List handleClick={this.handleClick.bind(this)} drinks = {this.state.drinks}/>
      </div>
    )
  }
}
export default App;