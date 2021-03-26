//TODO

{/* <div class = "listItem" id = {id}>
  <h4>Drink Name</h4>
  <div class = "imgDiv">
    <img src = {img source}/>
  </div>
</div> */}

import React from 'react';

var ListItem = (props) => {
  return (
    <div onClick={()=>{props.handleClick(props.drink)}} className = "listItem" id={props.drink.idDrink}>
      <h4>{props.drink.strDrink}</h4>
      <div className = "imgDiv">
        <img src={props.drink.strDrinkThumb}/>
      </div>
    </div>
  )
};
export default ListItem;

