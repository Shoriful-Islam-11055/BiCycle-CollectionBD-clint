import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import "./ManageStock.css";

const ManageStock = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState({});
  const [items, setItems] = useState(false);

  useEffect(() => {
    const url = `https://stormy-beach-91164.herokuapp.com/user/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


 //update quantity
 const reStockQuantity = (event) => {
  event.preventDefault();
  const quantity = parseInt(products.quantity);
  const add_quantity = parseInt(event.target.number.value);
  const newQuantity = parseInt(add_quantity + quantity);

  //send data to client  update
  const url = `https://stormy-beach-91164.herokuapp.com/user/${productId}`
  fetch(url, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({quantity : newQuantity}),
  }).then((()=>{
    setProducts({...products, quantity : newQuantity});
    event.target.reset();
  }))
  }
  

//Quantity reduce One  by One
  const quantityReduce = (event) =>{
   event.preventDefault();
  const quantity = parseInt(products.quantity);
  const newQuantity = quantity - 1;

  //send data to client  update
  const url = `https://stormy-beach-91164.herokuapp.com/user/${productId}`
  fetch(url, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({quantity: newQuantity}),
  }).then((()=>{
    setProducts({...products, quantity : newQuantity});
    event.target.reset();
  }))

  }
  
  
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
                <Button onClick={quantityReduce} className="px-5 fs-3 fw-bold mt-2">Distribute</Button>
              </div>

              <div>
                <div className="mt-5">
                  <form onSubmit={reStockQuantity}>
                  <label for="inputEmail4" className = "form-label fs-4 fw-bold">
                    Restock products, if needed.
                  </label>
                  <input type="number" name="number"  className = "form-control border-3 p-2" />
                  <Button type="submit"  className="px-5 fs-3 fw-bold mt-2">Update Quantity</Button>
                  </form>
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
