/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/gallery")
    fetch("https://toy-box-server-site.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  // console.log(gallery);

  return (
    <div className="mb-24">
      <div className="text-center mt-24 mb-8">
        <h3 className="text-3xl font-semibold mb-3">Gallery</h3>
        <p className="text-base">
        Make play time a blast with our finest toys and games!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {gallery.map((g) => (
          <>
            <div className=" md:mx-2 rounded-lg mx-auto">
              <img
                src={g.img}
                alt=""
                className="rounded-lg w-[295px] h-[295px] border-2 border-my-blue py-5"
              />
              <Link to="/all-toys" className="btn btn-outline bg-white text-my-pink hover:text-white hover:border-my-pink hover:bg-my-pink relative bottom-5 left-[6.5rem] btn-sm ml-2">View All</Link>
            </div>
          </>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        <div className=" mx-2 rounded-lg">
          <img
            src="https://image.made-in-china.com/155f0j00BZIYMyoKyLcj/Wholesale-Custom-Baby-Cute-Soft-Mini-Red-Horse-Plush-Horse-Toy-Plush-Horse-Stuffed-Animal-Toys.jpg"
            alt=""
            className="rounded-lg w-[295px] h-[295px] border-2 border-my-blue hover:bg-my-pink"
          />
          <Link className="btn btn-outline bg-white text-my-pink hover:text-white hover:border-my-pink hover:bg-my-pink relative bottom-5 left-[6.5rem] btn-sm ml-2">View All</Link>
        </div>
        <div className=" mx-2 rounded-lg">
          <img
            src="https://image.made-in-china.com/155f0j00BZIYMyoKyLcj/Wholesale-Custom-Baby-Cute-Soft-Mini-Red-Horse-Plush-Horse-Toy-Plush-Horse-Stuffed-Animal-Toys.jpg"
            alt=""
            className="rounded-lg w-[295px] h-[395px] border-2 border-my-blue hover:bg-my-pink"
          />
          <Link className="btn btn-outline bg-white text-my-pink hover:text-white hover:border-my-pink hover:bg-my-pink relative bottom-5 left-[6.5rem] btn-sm ml-2">View All</Link>
        </div>
        <div className=" mx-2 rounded-lg">
          <img
            src="https://image.made-in-china.com/155f0j00BZIYMyoKyLcj/Wholesale-Custom-Baby-Cute-Soft-Mini-Red-Horse-Plush-Horse-Toy-Plush-Horse-Stuffed-Animal-Toys.jpg"
            alt=""
            className="rounded-lg w-[295px] h-[295px] border-2 border-my-blue hover:bg-my-pink"
          />
          <Link className="btn btn-outline bg-white text-my-pink hover:text-white hover:border-my-pink hover:bg-my-pink relative bottom-5 left-[6.5rem] btn-sm ml-2">View All</Link>
        </div>
        <div className=" mx-2 rounded-lg">
          <img
            src="https://image.made-in-china.com/155f0j00BZIYMyoKyLcj/Wholesale-Custom-Baby-Cute-Soft-Mini-Red-Horse-Plush-Horse-Toy-Plush-Horse-Stuffed-Animal-Toys.jpg"
            alt=""
            className="rounded-lg w-[295px] h-[395px] border-2 border-my-blue hover:bg-my-pink"
          />
          <Link className="btn btn-outline bg-white text-my-pink hover:text-white hover:border-my-pink hover:bg-my-pink relative bottom-5 left-[6.5rem] btn-sm ml-2">View All</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Gallery;
