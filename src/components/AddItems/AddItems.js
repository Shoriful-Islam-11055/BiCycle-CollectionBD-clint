import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/user`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    })
  };

  return (
    <div className="m-3 w-50 mx-auto bg-success p-3">
      <h2>Please Add Items</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 p-2 rounded-3 shadow-md" placeholder="ProductName" {...register("name", { required: true, maxLength: 20 })} /> 

        <input className="mb-2 p-2 rounded-3 shadow-md" placeholder="Image URL" {...register("img")} /> 

        <textarea className="mb-2 p-2 rounded-3 shadow-md" placeholder="Description" {...register("description")} /> 

        <input className="mb-2 p-2 rounded-3 shadow-md" placeholder="Quantity"type="number" {...register("quantity")} /> 

        <input className="mb-2 p-2 rounded-3 shadow-md" placeholder="Price"type="number" {...register("price")} /> 

        <input className="mb-2 p-2 rounded-3 shadow-md" placeholder="Supplier Name" {...register("supplierName")} /> 

        <input value= "ADD PRODUCT"  type="submit" className="p-2 fs-4 fw-bold btn btn-outline-light rounded-3"/>
      </form>
    </div>
  );
};

export default AddItems;
