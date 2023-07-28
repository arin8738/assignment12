/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import Swal from "sweetalert2";

const SingleToyCard = ({ toy, setSingleData }) => {
  const { user } = useContext(AuthContext);

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
  } = toy;

  const showMessage = ()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You are not nog in yet! Login to see details',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  return (
    // <div>
    //   <img src={photo} alt="" className="w-96 h-96"/>
    //   <h4>{name}</h4>

    // </div>

    <tr className="text-center" data-aos="fade-up">
      <td></td>
      <td>
        <div className="mask w-32 h-28">
          <img src={photo} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>
        <div className="font-bold text-my-pink">{name}</div>
      </td>

      <td className="text-my-yellow font-semibold">{"$ " + price}</td>
      <td className="text-my-blue font-semibold">{quantity}</td>
      <td className="font-bold text-my-pink">{seller}</td>
      <td className="text-my-blue font-semibold">{category}</td>
      <th>
        {!user ? (
          <Link onClick={showMessage} to="/login" className="btn btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue">
            View Details
          </Link>
        ) : (
          <label
            onClick={() => {
              setSingleData(toy);
            }}
            htmlFor="my-modal-3"
            className=" btn btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
          >
            View Details
          </label>
        )}
      </th>
    </tr>
  );
};

export default SingleToyCard;
