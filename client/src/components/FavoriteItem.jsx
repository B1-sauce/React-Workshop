import React from 'react';

var FavoriteItem = (props)=>{
  return (
    <div className="listItem" id={props.drink.idDrink} key={props.drink.idDrink}>
      <h4>{props.drink.strDrink}</h4>
      <div className="imgDiv">
        <img src={props.drink.strDrinkThumb} />
      </div>
    </div>
  )
}
export default FavoriteItem;