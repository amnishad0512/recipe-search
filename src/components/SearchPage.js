import React, { useEffect, useState } from "react";
import RecipesList from "./RecipesList";

const SearchPage = () => {
  const [recipe, setRecipe] = useState("");
  const [recipeList, setRecipeList] = useState([]);

  async function fetchRecipe() {
    await fetch(
      `https://api.edamam.com/search?app_id=eb10855f&app_key=a3b13f3aec7fc48dc23d56886270390c&q=${
        recipe ? recipe : "pizza"
      }`
    )
      .then(async (res) => await res.json())
      .then(async (res) => setRecipeList(res.hits));
    console.log("recipe=>", recipeList);
  }

  useEffect(() => {
    fetchRecipe();
  }, [recipe]);

  function handleInput(e) {
    setRecipe(e.target.value);
  }
  return (
    <div className="w-75 mx-auto">
      <div className="w-50 mx-auto py-3">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 rounded-pill"
            type="search"
            aria-label="Search"
            value={recipe}
            onChange={handleInput}
            placeholder="Find the best recipe across the world"
          />
        </form>
      </div>
      <RecipesList recipeList={recipeList} />
    </div>
  );
};

export default SearchPage;
