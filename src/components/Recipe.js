import React from "react";

const Recipe = ({ title, img, calories, ingredients, type }) => {
  return (
    <div className="border p-1 w-25 my-2">
      <div className="col-lg-3">
        <img src={img} alt="" />
      </div>
      <div className="p-2 text-small">
        <p>{title}</p>
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
