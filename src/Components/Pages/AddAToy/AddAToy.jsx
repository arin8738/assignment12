/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../Title/Title";
import { AuthContext } from "../AuthorizationPage/AuthProvider";


const AddAToy = () => {
  const [fill, setFill] = useState(false);
  const {user} = useContext(AuthContext);
  useTitle("Add-New-Toy");
  const [ctgry, setCtgry] = useState("");

  const handleFilter = (event) => {
    console.log(event.target.value);
    // setSort(event.target.value);
    setCtgry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = parseInt(form.quantity.value);
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    // const category = form.category.value;
    const category = ctgry;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;


    if(name && quantity && seller && sellerEmail && category && details && photo && price && rating){
      setFill(true);
    }
    else{
      Swal.fire({
        title: "Unable to add!",
        text: "Fill all the input fields",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      return
    }
    // console.log(fill);

    const toy = {
      name,
      quantity,
      seller,
      sellerEmail,
      category,
      details,
      photo,
      price,
      rating,
    };

    console.log(toy);

    // fetch("http://localhost:5000/add-new-car", {
    fetch("https://toy-box-server-site.vercel.app/add-new-car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };

 

  return (
    <div className="rounded-lg bg-gradient-to-r from-my-blue to-my-pink px-28 py-20 w-4/5 mx-auto my-20">
      <h3 className="text-3xl font-extrabold text-center mb-4 text-white">
        Add A New Toy
      </h3>

      <form onSubmit={handleSubmit}>
        {/* form row  */}
        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Toy name:{" "}
              </span>
            </label>
            <label className="input-group">
              <input
                style={{ borderRadius: "10px" }}
                type="text"
                placeholder="Toy name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Available Quantity
              </span>
            </label>
            <label className="input-group">
              <input
                style={{ borderRadius: "10px" }}
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Seller name:{" "}
              </span>
            </label>
            <label className="input-group">
              <input
                style={{ borderRadius: "10px" }}
                name="seller"
                type="text"
                placeholder="Seller name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Seller email:
              </span>
            </label>
            <label className="input-group">
              <input
              defaultValue={user?.email}
              disabled
                style={{ borderRadius: "10px" }}
                name="sellerEmail"
                type="email"
                placeholder="Seller email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Price:{" "}
              </span>
            </label>
            <label className="input-group">
              <input
                style={{ borderRadius: "10px" }}
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Rating:
              </span>
            </label>
            <label className="input-group">
              <input
                style={{ borderRadius: "10px" }}
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Sub category:{" "}
              </span>
            </label>
            <label className="input-group">
              {/* <input
              style={{borderRadius: "10px"}}
                name="category"
                type="text"
                placeholder="Sub category"
                className="input input-bordered w-full"
              /> */}

              <select
              style={{borderRadius: "10px", width: "100%", }}
                onChange={handleFilter}
                className="select select-bordered"
              >
                <option disabled selected>
                  Select Category
                </option>
                <option value="Police-Car">Police-Car</option>
                <option value="Super-Car">Super-Car</option>
                <option value="Truck">Truck</option>
                
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">
                Details:
              </span>
            </label>
            <label className="input-group">
              <input
                style={{ borderRadius: "10px" }}
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text text-white text-base font-semibold">
              Photo URL of the toy:
            </span>
          </label>
          <label className="input-group">
            <input
              style={{ borderRadius: "10px" }}
              name="photo"
              type="text"
              placeholder="Toy photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
        // disabled={!fill && true}
          type="submit"
          value="Add New Car"
          className="btn drop-shadow-2xl btn-block bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue"
        />
      </form>
    </div>
  );
};

export default AddAToy;
