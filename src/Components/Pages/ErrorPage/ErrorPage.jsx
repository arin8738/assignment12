/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../../assets/404-error-page-not-found.jpg"
import useTitle from "../../Title/Title";

const ErrorPage = () => {
  useTitle("Error-Page");
  const error = useRouteError();
  //   console.error(error);

  return (
    <div id="error-page" className="flex items-center justify-center text-center">
      <div >
        <img src={errorImg} alt="" 
            className="md:w-3/4 h-[500px] w-[600px] mx-auto"
         />
        <h1 className="text-lg font-semibold">Oops!</h1>
        <p className="text-lg font-semibold">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg font-semibold text-red">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className=" my-10 btn font-bold bg-my-pink border-my-pink text-white hover:bg-my-blue mr-5 hover:border-my-blue">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
