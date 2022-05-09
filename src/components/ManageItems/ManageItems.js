import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "react-bootstrap";
import useBicycle from "../hooks/useBicycle";
import "./ManageItems.css";

const ManageItems = () => {
  const [biCycles, setBiCycles] = useBicycle();

  //delete data
  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you want to delete!");
    if (proceed) {
      console.log("deleting id", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // console.log("delete successfully");
            const remaining = biCycles.filter((biCycle) => biCycle._id !== id);
            setBiCycles(remaining);
          }
        });
    }
  };

  return (
    <div className="mb-3">
      <h2 className="section-title text-center">Manage All Items</h2>
      <div className="manageItem">
        {biCycles.map((biCycle) => (
          <div key={biCycle._id}>
            <div class="container card-background">
              <div class="row">
                <div class="col-12 fs-4 text-center bg-dark text-light">
                  {biCycle.name}
                </div>
                <div class="col-4">
                  <img src={biCycle.img} className="cart-img" alt="..."></img>
                </div>
                <div class="col-8">
                  <h5 className="card-title mt-2">
                    Supplier Name : {biCycle.supplierName}
                  </h5>
                  <h5 className="card-title">Quantity : {biCycle.quantity}</h5>
                  <h5 className="card-title">Price : {biCycle.price}</h5>
                  <p className="card-text text-start">
                    <span className="fs-5 fw-bold">Description: </span>
                    {biCycle.description.length > 150
                      ? biCycle.description.slice(0, 150)
                      : biCycle.description}
                    ..........{" "}
                  </p>
                  
                  <Button
                    onClick={() => handleUserDelete(biCycle._id)}
                    className="px-3 fs-5 fw-bold mt-2 trash-btn"
                  >
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span className="ms-2">DELETE PRODUCT</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
