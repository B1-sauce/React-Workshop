//TODO

// if favorites exist

{/* <div>
  <h3>Favorites</h3>
  <div class = "favoritesList">
    <div>
      <h4>Favorite drink 1 name</h4>
      <div class = "imgDiv">
        <img src = {favorite drink 1 src}/>
      </div>
    </div>
    <div>
      <h4>Favorite drink 2 name</h4>
      <div class = "imgDiv">
        <img src = {favorite drink 2 src}/>
      </div>
    </div>
  </div>
</div> */}

import React from 'react';
import FavoritesItem from './FavoritesItem.jsx';

var Favorites = (props) => {
  if (props.favoriteDrinks.length > 0) {
    return (
      <div>
        <h3>Favorites</h3>
        <div className = "favoritesList">
          {props.favoriteDrinks.map((favorite, index) => (
            <FavoritesItem removeFavoriteDrink={props.removeFavoriteDrink} key = {index} drink = {favorite}/>
          ))}
        </div>
      </div>
    )
  } else {
    return (<div>No Favorites</div>);
  }
}

export default Favorites;