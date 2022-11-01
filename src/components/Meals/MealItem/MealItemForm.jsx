import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
function MealItemForm(props) {
    const inputProps = {
        id:`amoun ${props.id}`,
        type: "number",
        max: "5",
        
        min: "1",
        step: '1',
        defaultValue: "1"
    }
  return (
    <form className={classes.form}>
    <Input label = 'amount' input={inputProps}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm