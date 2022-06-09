import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Recipe = ({ key, title, img, calories, ingredients, type }) => {
  let navigate = useNavigate();
  function handle(title) {
    navigate(`/${title}`, { replace: true });
  }
  return (
    <div className="border p-1 w-25 my-2" onClick={()=>handle(title)}>
      <div className="col-lg-3">
        <img src={img} alt="" />
      </div>
      <div className="p-2 text-small">
        <p>
          {key}
          {title}
        </p>
      </div>
      <div
        className="d-flex p-2 border-top border-bottom justify-content-around"
        style={{ fontSize: "12px" }}
      >
        <div>{Math.trunc(calories)} CALORIES</div>
        <div>|</div>
        <div>{ingredients.length} INGREDIENTS</div>
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
