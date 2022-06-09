import React, { useState } from "react";
import Recipe from "./Recipe";

const RecipesList = ({ recipeList }) => {
  const [recipeDetail, setRecipeDetail] = useState({});
  return (
    <div className="d-flex flex-wrap">
      {recipeList.map((recipe) => {
        setRecipeDetail()
        console.log()
        // return <Recipe  />;
      })}
    </div>
  );
};

export default RecipesList;
