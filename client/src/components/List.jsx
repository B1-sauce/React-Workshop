//TODO

{/* <div class = "list">
  <div>List Item</div>
</div> */}

import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => (
  <div className = 'list'>
      {props.drinks.map(
        (drink, index) => (
          <ListItem handleClick={props.handleClick} key={index} drink={drink}/>
        )
      )}
  </div>
)

export default List;