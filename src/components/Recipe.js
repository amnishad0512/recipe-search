import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";
const Recipe = ({
  title,
  img,
  calories,
  ingredientLines,
  type,
  source,
  url,
  totalNutrients,
}) => {
  let navigate = useNavigate();
  function handle() {
    navigate(`/${title}`, {
      state: { title, img, ingredientLines, source, url, totalNutrients },
    });
  }

  return (
    <div className="mainRecipe" onClick={() => handle()}>
      <div className="img">
        <img src={img} className="image" />
      </div>
      <div className="p-2 text-small">
        <p>{title}</p>
      </div>
      <div
        className="d-flex p-2 border-top border-bottom justify-content-around"
        style={{ fontSize: "12px" }}
      >
        <div>
          <span className="text-success">{Math.trunc(calories)}</span> CALORIES
        </div>
        <div>|</div>
        <div>
          <span className="text-success">{ingredientLines.length}</span>{" "}
          INGREDIENTS
        </div>
      </div>
      <div>
        <p className="fw-bold p-2" style={{ fontSize: "10px" }}>
          {type}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
