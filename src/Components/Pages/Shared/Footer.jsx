/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";
// import logo from "../../../../public/mybox.ico";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 bg-base-200 text-base-content max-w-7xl mx-auto">
        <div>
          <span className="footer-title">EXTRAS</span>
          <a className="hover:text-my-pink hover:cursor-pointer">Brands</a>
          <a className="hover:text-my-pink hover:cursor-pointer">
            Gift Certificates
          </a>
          <a className="hover:text-my-pink hover:cursor-pointer">Affiliate</a>
          <a className="hover:text-my-pink hover:cursor-pointer">Specials</a>
        </div>
        <div>
          <span className="footer-title">My Account</span>
          <a className="hover:text-my-pink hover:cursor-pointer">My Account</a>
          <a className="hover:text-my-pink hover:cursor-pointer">
            Order History
          </a>
          <a className="hover:text-my-pink hover:cursor-pointer">Wish List</a>
          <a className="hover:text-my-pink hover:cursor-pointer">Newsletter</a>
          <a className="hover:text-my-pink hover:cursor-pointer">Returns</a>
        </div>
        <div>
          <span className="footer-title">INFORMATION</span>
          <a className="hover:text-my-pink hover:cursor-pointer">About Us</a>
          <a className="hover:text-my-pink hover:cursor-pointer">
            Delivery Information
          </a>
          <a className="hover:text-my-pink hover:cursor-pointer">
            Privacy Policy
          </a>
          <a className="hover:text-my-pink hover:cursor-pointer">
            Terms & Conditions
          </a>
          <a className="hover:text-my-pink hover:cursor-pointer">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <FaPhoneAlt className=" text-my-pink" />
              +1800-001-658
            </div>
          </a>
          <a className="">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <HiMail className="text-lg text-my-pink" />
              thechefstable@gmail.com
            </div>
          </a>
          <a className="">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <HiLocationMarker className="text-lg text-my-pink" />
              Envato HQ 24 Fifth st., Los Angeles, USA
            </div>
          </a>
          <a className="">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <HiMail className="text-lg text-my-pink" />
              Welcome to <span className="text-my-blue">Toy</span>
              <span className="text-my-pink">Box</span> toy website
            </div>
          </a>
        </div>
      </footer>
      <footer className="footer px-10 pt-4 border-t bg-base-200 text-base-content border-base-300 max-w-7xl mx-auto">
        <div className="items-center grid-flow-col">
          {/* <img src={logo} alt="" /> */}
          <p>
            <span className="text-my-blue text-lg font-semibold">Toy</span>
            <span className="text-my-pink text-lg font-semibold">Box</span>{" "}
            <br />
            Reliable since 2017
          </p>
        </div>

        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div className="flex items-center bg-base-200 text-base-content justify-center py-10 md:pt-2 md:pb-10">
        <FaRegCopyright></FaRegCopyright>
        <p className="ml-2">COPYRIGHT 2017 ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
