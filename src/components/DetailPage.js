import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./DetailPage.css";
const DetailPage = () => {
  const location = useLocation();
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="row p-2">
        <div className="col-md-4 col-sm-12 p-0 text-center">
          <img src={location.state.img} alt="" />
        </div>
        <div className="col-md-8 col-sm-12 text-center d-flex justify-content-between flex-column">
          <div>
            <p className="title my-1">{location.state.title}</p>
            <p className="source">
              See full recipe on :{" "}
              <a href={location.state.url} target="_blank">{location.state.source}</a>
            </p>
          </div>
          <div className="mx-auto">
            <button className="btn btn-dark disabled mx-2">Save</button>
            <button className="btn btn-dark" onClick={()=>navigate("/")}>Back</button>
            <div className="d-flex justify-content-center">
              <div>
                <i class="fa-solid fa-envelope"></i>
                <p className="social mb-0">EMAIL</p>
              </div>
              <div className="mx-2">
                <i class="fa-brands fa-pinterest"></i>
                <p className="social mb-0">PIN IT</p>
              </div>
              <div>
                <i class="fa-brands fa-facebook"></i>
                <p className="social mb-0">SHARE</p>
              </div>
              <div className="mx-2">
                <i class="fa-brands fa-twitter"></i>
                <p className="social mb-0">TWEET</p>
              </div>
              <div>
                <i class="fa-brands fa-google-plus"></i>
                <p className="social mb-0">GOOGLE +</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-lg-6">
          <p className="m-0 fw-bold">
            {location.state.ingredientLines.length} Ingredients
          </p>
          <hr />
          <div className="ingredients-list">
            {location.state.ingredientLines.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
        <div className="col-lg-6">
          <p className="fw-bold">Nutrition </p>
          <hr />
          <p>
            {Object.keys(location.state.totalNutrients).map(function (key) {
              return (
                <span>{location.state.totalNutrients[key].label + ", "}</span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
