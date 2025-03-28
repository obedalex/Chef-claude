import React from "react";

const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientItems = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form" action="">
        <input
          aria-label="add ingredient"
          type="text"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientItems}</ul>
    </main>
  );
};

export default Main;

// * Challenge:
// * Add the new ingredient to the array of ingredients. Also, add a
// * console.log(ingredients) after adding the ingredient, because
// * **warning**: you aren't going to see the page update!
// *
// * Hint: this is a one-liner solution, so don't overthink it 😅
