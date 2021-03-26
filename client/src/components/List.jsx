//TODO
import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => {
  return (
    <div className="list">
      {
        props.drinks.map((drink) =>
          <ListItem
            drink={drink}
            key={drink.idDrink}
            handleClick={props.handleClick}
          />)
      }
    </div>
  )
}

export default List;