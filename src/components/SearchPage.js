import React, { useContext, useEffect, useState } from "react";
import RecipesList from "./RecipesList";
import Filter from "./Filter";
import { ListContext } from "../context/List";
import Spinner from "./Spinner";

const SearchPage = () => {
  const [recipe, setRecipe] = useState("egg");
  const { setItem } = useContext(ListContext);
  async function fetchRecipe() {
    await fetch(
      `https://api.edamam.com/search?app_id=dbd03d4a&app_key=d277358557af4519d7f8394ca2e6fc4f&q=${recipe}`
    )
      .then((res) => res.json())
      .then((res) => setItem(res.hits));
  }

  useEffect(() => {
    fetchRecipe();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchRecipe();
  }
  return (
    <div className="w-75 mx-auto">
      <div className="w-50 mx-auto py-3">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control rounded-pill"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Find the best recipes from across the web..."
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <datalist id="datalistOptions">
            <option value="salad" />
            <option value="poha" />
            <option value="matar" />
            <option value="Biryani" />
            <option value="chicken" />
            <option value="aam" />
            <option value="dosa" />
            <option value="egg" />
            <option value="fish" />
            <option value="ice" />
            <option value="juice" />
            <option value="oil" />
            <option value="rice" />
            <option value="soup" />
            <option value="vodka" />
          </datalist>
        </form>
      </div>
      <RecipesList />
    </div>
  );
};

export default SearchPage;
