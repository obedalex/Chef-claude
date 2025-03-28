import React from "react";

const Main = () => {
  return (
    <form className="add-ingredient-form" action="">
      <input
        aria-label="add ingredient"
        type="text"
        placeholder="e.g oregano"
      />
      <button>Add ingredient</button>
    </form>
  );
};

export default Main;
