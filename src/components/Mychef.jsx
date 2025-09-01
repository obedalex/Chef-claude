import React from 'react'

export const Mychef = () => {

//A button that receives recipes 
//useState that tracks ingredients that are added to the recipe collector 

const [ingredients, setIngredients] = React.useState( ["all the main spices", "pasta", "ground beef", "tomato paste"]); //1st part is done 

const ingredientsListItems = setIngredients(() => )

function addIngredient(){ //function to receive ingredients with useState tracking it 

}


  return (
    <div>
       <input type="text"
       className=''  />

       <button onClick={addIngredient}>+Add Ingredient</button>
    </div>
  )
}
