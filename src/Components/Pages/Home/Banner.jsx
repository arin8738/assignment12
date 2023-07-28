/* eslint-disable no-unused-vars */
import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";
AOS.init();


const Banner = () => {
  const img = "https://i8.amplience.net/i/egl/toys-240423-gooutdoors-ld";
  const img2 ="https://www.smarterkids.com/static/homepage-18a1bd7ddcc32e7393a29cd6973790e2.jpg";
  const img3 = "https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg";
  const img4 = "https://cdn.shopify.com/s/files/1/1445/6088/files/Untitled_design_18.png?v=1676119977&width=3000";
  

  const overlay = (
    <div
      className="absolute top-0 w-full cover h-full  bg-opacity-60 flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, .5)" }}
    >
      <div className="text-white">
        <div className="w-full md:w-2/3 mx-auto text-center "  data-aos="zoom-in-up">
          <h2 className="text-3xl w-3/4 md:w-full mx-auto md:text-6xl font-bold uppercase">
            Pick your best toy for your kid
          </h2>
          <p className="mb-6 mt-4 text-lg w-2/3 md:w-full mx-auto md:text-xl">
            Make play time a blast with our finest toys and games!
          </p>
          <div>
            <Link to="/all-toys" className="btn font-bold bg-my-pink border-my-pink text-white hover:bg-my-blue mr-5 hover:border-my-blue">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative rounded-lg mt-10">
      <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full max-h-[600px] rounded-lg ">
          <img src={img} className="w-full " />

          {overlay}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full max-h-[600px] rounded-lg">
          <img src={img2} className="w-full" />
          {overlay}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full max-h-[600px] rounded-lg">
          <img src={img3} className="w-full" />
          {overlay}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full max-h-[600px] rounded-lg">
          <img src={img4} className="w-full" />
          {overlay}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
