import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import '../ManageItems/ManageItems.css'

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const email = user?.email;
    
    

    useEffect(()=>{
        const myItems = async ()=>{
            const url = `https://stormy-beach-91164.herokuapp.com/items?email=${email}`;
            const {data} = await axios.get(url);
            setItems(data);
        }
        myItems();
    }, [])

    const handleUserDelete = (id) => {
        const proceed = window.confirm("Are you want to delete!");
        if (proceed) {
          console.log("deleting id", id);
          const url = `https://stormy-beach-91164.herokuapp.com/user/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                // console.log("delete successfully");
                const remaining = items.filter((item) => item._id !== id);
                setItems(remaining);
              }
            });
        }
      };
    

    return (
        <div className="mb-3">
      <h2 className="section-title text-center">Manage All Items</h2>
      <div className="manageItem">
        {items.map((item) => (
          <div key={item._id}>
            <div class="container card-background">
              <div class="row">
                <div class="col-12 fs-4 text-center bg-dark text-light">
                  {item.name}
                </div>
                <div class="col-4">
                  <img src={item.img} className="cart-img" alt="..."></img>
                </div>
                <div class="col-8">
                  <h5 className="card-title mt-2">
                    Supplier Name : {item.supplierName}
                  </h5>
                  <h5 className="card-title">Quantity : {item.quantity}</h5>
                  <h5 className="card-title">Price : {item.price}</h5>
                  <p className="card-text text-start overflow-wrap">
                    <span className="fs-5 fw-bold">Description: </span>
                    {item.description.length > 150
                      ? item.description.slice(0, 150)
                      : item.description}
                    ..........{" "}
                  </p>
                  
                  <Button
                    onClick={() => handleUserDelete(item._id)}
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

export default MyItems;