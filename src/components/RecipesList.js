import React from "react";
import Recipe from "./Recipe";

const RecipesList = ({ recipeList }) => {
  return (
    <div className="d-flex flex-wrap">
      {recipeList.map((recipe, i) => {
        return (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            img={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            type={recipe.recipe.dishType}
          />
        );
      })}
    </div>
  );
};

export default RecipesList;
