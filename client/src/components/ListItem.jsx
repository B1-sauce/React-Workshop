//TODO
import React from 'react';

var ListItem = (props) => {
  return (
    <div className="listItem" onClick={()=> {props.handleClick(props.drink)}} id={props.drink.idDrink} key={props.drink.idDrink}>
      <h4>{props.drink.strDrink}</h4>
      <div className="imgDiv">
        <img src={props.drink.strDrinkThumb} />
      </div>
    </div>
  )
}

export default ListItem;