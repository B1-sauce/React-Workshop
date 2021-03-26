//TODO
import React from 'react';
import FavoriteItem from './FavoriteItem.jsx';

var Favorites = (props) => {
  if (props.favoriteDrinks.length > 0) {
    return (
      <div>
        <h3>Favorites</h3>
        <div className="favoritesList">
          {
          props.favoriteDrinks.map((drink, index) =>
          <FavoriteItem
          drink={drink}
          key={index}
          />)
          }
        </div>
      </div>
    )
  } else {
    return (<div>No favoriteDrinks</div>)
  }
}

export default Favorites;

