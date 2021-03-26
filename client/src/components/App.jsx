//TODO
import React from 'react';
import List from './List.jsx';
import dummy from '../../../public/data/dummy.js';
import Favorites from './Favorites.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drinks: [],
      favoriteDrinks:[]
    }
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount(){
    this.setState({
      drinks: dummy.drinks
    }, ()=>console.log(this.state))
  }
  handleClick (drink){
    this.setState({
      favoriteDrinks:[...this.state.favoriteDrinks, drink]
    }, ()=>console.log('abc'))
  }


  render() {
    return (
      <div>
        <h2 className="header">Cocktails</h2>
        <Favorites favoriteDrinks={this.state.favoriteDrinks} />
        <List drinks={this.state.drinks} handleClick={this.handleClick}/>
      </div>
    )
  }


}

export default App;