/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React from "react";

const ViewDetails = ({ singleData }) => {
  const {
    name,
    quantity,
    seller,
    sellerEmail,
    category,
    details,
    photo,
    price,
    rating,
  } = singleData;
  return (
    <div>
      <div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-3/5 max-w-5xl md:flex justify-around items-center p-5 border-double border-2 border-my-pink shadow-lg">
            <div>
              <img src={singleData?.photo} className="w-96 h-80 p-5" alt="" />
            </div>

            <div className="divider lg:divider-horizontal"></div>

            <div className="px-5 text-lg text-base-500 font-semibold">
              <h3 className="font-bold text-2xl text-center my-2 ">{name}</h3>

              <p className="py-2 ">
                <span className="text-my-blue">Details:</span> {details}
              </p>
              <p className="py-2 ">
                <span className="text-my-blue">Seller:</span> {seller}
              </p>
              <p className="py-2 ">
                <span className="text-my-blue">Seller mail:</span> {sellerEmail}
              </p>

              <div className="">
                <p className="py-2 ">
                  <span className="text-my-blue">Category:</span> {category}
                </p>
                <p className="py-2">
                  <span className="text-my-blue">Quantity:</span> {quantity}
                </p>
              </div>

              <div className="">
                <p className="py-2 ">
                  <span className="text-my-blue">Price:</span> ${price}
                </p>

                <p className="flex items-center py-2">
                  <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                  <span className="ml-2">{rating}</span>
                </p>
              </div>

              <div className="modal-action">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2 bg-red border-red hover:bg-my-blue hover:border-my-blue"
                >
                  ✕
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
