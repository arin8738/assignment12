/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React from "react";

const CustomerReview = () => {
  return (
    <div className="bg-base-200 p-20 text-center rounded-tr-xl rounded-tl-xl ">
      <h3 className="text-3xl font-semibold mb-5">HAPPY CUSTOMERS</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <Rating className="my-4 mx-auto" style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-lg">
            "Donec pretium vulputate sapien necen sagittis aliquam hac habitass
            platea dictumst quisque sagit."
          </p>
          <p className="my-4 text-my-blue">PAWEL, CHICAGO</p>
        </div>

        <div>
          <Rating className="my-4 mx-auto" style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-lg">
          "Massa eget egestas purus viverra a in nisl nisi. Ut tortor pretium viverra suspendise potenti tempor orc ed."
          </p>
          <p className="my-4 text-my-blue">LOLA, LONDON</p>
        </div>

        <div>
          <Rating className="my-4 mx-auto" style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-lg">
            "Facilisis magna etiam tempor orci eu lobortis elementum nibh. Id donec ultricese tincidunt aru."
          </p>
          <p className="my-4 text-my-blue">JASMINE, CALIFORNIA</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
