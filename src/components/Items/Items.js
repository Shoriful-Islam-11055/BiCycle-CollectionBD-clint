import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Items.css";

const Items = ({ item }) => {
  const { _id, name, img, description, supplierName, quantity, price } = item;
  const navigate = useNavigate();

  const navigateToCycleDetails = (id) => {
    navigate(`/ManageStock/${id}`);
  };
  return (
    <div>
      <div className="card rounded-3 h-100 shadow-lg">
        <img src={img} className="card-img-top cart-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">{name}</h5>
          <h5 className="card-title">Supplier Name : {supplierName}</h5>
          <h5 className="card-title">Quantity : {quantity}</h5>
          <h5 className="card-title">Price : {price}</h5>
          <p className="card-text text-start">
            <span className="fs-5 fw-bold">Description: </span>
            {description.length > 150 ? description.slice(0, 130) : description}
            ..........{" "}
          </p>
          <div>
              <button
                onClick={() => navigateToCycleDetails(_id)}
                className="btn-lg btn btn-primary fs-5 fw-bold w-100"
              >
                Manage Stock
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
