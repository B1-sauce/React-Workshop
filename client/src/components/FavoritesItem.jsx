import React from 'react';

var FavoritesItem = (props) => {
  return (
    <div onClick={()=>{props.removeFavoriteDrink(props.drink)}} className = "favorite" id={props.drink.idDrink}>
      <h4>{props.drink.strDrink}</h4>
      <div className = "imgDiv">
        <img src={props.drink.strDrinkThumb}/>
      </div>
    </div>
  )
};
export default FavoritesItem;