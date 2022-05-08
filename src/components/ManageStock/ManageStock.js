import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ManageStock.css";

const ManageStock = () => {
  const { productId } = useParams();

  const [products, setProducts] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/user/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
   <div className="bg-manageStock">
        <div className="container">
      <div className="card mb-3 mx-3 border-0">
        <div className="row g-0">
          <div className="col-md-8 align-center bg-manageStock">
            <h2>{products.name}</h2>
            <img
              src={products.img}
              className="img-fluid rounded-start single-img"
              alt="..."
            />
            <p className = "card-text">
              <span className="fs-5 fw-bold">Products Details:</span>{" "}
              {products.description}
            </p>
          </div>
          <div className="col-md-4 bg-manageStock">
            <div className="card-body text-center">
              <h3>
                <span className="fw-bold">Supplier Name:</span>{" "}
                {products.supplierName}
              </h3>
              <h3>
                <span className="fw-bold">Product Price:</span> {products.price}
              </h3>
              <h3>
                <span className="fw-bold">Product Quantity:</span>{" "}
                {products.quantity}
              </h3>

              <div>
                <Button className="px-5 fs-3 fw-bold mt-2">Distribute</Button>
              </div>

              <div>
                <div className="mt-5">
                  <label for="inputEmail4" className = "form-label fs-4 fw-bold">
                    Restock products, if needed.
                  </label>
                  <input type="text" className = "form-control border-3 p-2" />
                  <Button className="px-5 fs-3 fw-bold mt-2">Add Product</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ManageStock;
