/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import AOS from "aos";

const Main = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
