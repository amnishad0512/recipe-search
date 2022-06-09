import React, { useContext } from "react";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import "./RecipeList.css"
import { ListContext } from "../context/List";

const RecipesList = () => {
  const { item, setItem } = useContext(ListContext);

  return (
    <div className="gridContainer">
      {item.map((recipe) => {
        return item ? (
          <Recipe
            key={uuidv4()}
            title={recipe.recipe.label}
            img={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredientLines={recipe.recipe.ingredientLines}
            type={recipe.recipe.dishType}
            source={recipe.recipe.source}
            url={recipe.recipe.url}
            totalNutrients={recipe.recipe.totalNutrients}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default RecipesList;
