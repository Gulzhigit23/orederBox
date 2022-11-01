import React from "react";
import { useState } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const price = props.price.toFixed(2);
  // const [counter, setCounter] = useState(0);
  // const [amount, setAmount] = useState(price)

  // const increase = () => {
  //   setCounter((counter) => counter + 1);
  //   setAmount((prev) => +prev + props.price)
  // };
  // const decrease = () => {
  //   if (counter > 0) {
  //       setCounter((prev) => prev -1)
  //       setAmount((prev) => +prev - props.price)
  //   }
  //   }

   

  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>

      <div>
      <div className={classes.amount}>
      {/* <button onClick={increase}>+</button>
        <span>{counter}</span>
        <button onClick={decrease}>-</button>
        <span>{`total: ${Number(amount).toFixed(2)}`}</span> */}

        </div>
        <div>
          <MealItemForm id={props.id}/>
        </div>
        
      </div>
    </li>
  );
}

export default MealItem;
