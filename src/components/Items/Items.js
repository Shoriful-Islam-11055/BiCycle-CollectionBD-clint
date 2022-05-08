import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Items = (props) => {
  const { name, img, description, rating, Fee } = props.item;
  return (
    <div>
      <div className="card rounded-3 h-100 shadow-lg">
        <img src={img} className="card-img-top cart-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Name : {name}</h5>
          <h5 className="card-title">Rating : {rating}</h5>
          <h5 className="card-title">Treatment Fee : {Fee}</h5>
          <p className="card-text text-start">
            <span className="fs-5 fw-bold">Description: </span>
            {description.length > 150 ? description.slice(0, 130) : description}
            ..........{" "}
          </p>
          <div>
            <Link to="/appointment">
              <button className="btn-lg btn btn-primary fs-5 fw-bold w-100">
                Manage Stock
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
