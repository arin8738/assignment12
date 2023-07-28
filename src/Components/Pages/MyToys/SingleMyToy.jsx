/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthorizationPage/AuthProvider";

const SingleMyToy = ({ toy, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
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
  return (
    // <div>
    //   <img src={photo} alt="" className="w-96 h-96"/>
    //   <h4>{name}</h4>

    // </div>

    <tr className="text-center" data-aos="fade-up">
      <td>
        <button
        onClick={()=>handleDelete(_id)}
         className="btn btn-circle btn-md btn-outline hover:bg-[#f03d11] hover:border-[#f03d11] text-[#f03d11]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
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
        <Link
          to={`/update/${_id}`}
          className="btn btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
        >
          Update Info
        </Link>
      </th>
    </tr>
  );
};

export default SingleMyToy;
