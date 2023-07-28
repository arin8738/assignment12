/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import { Bars } from "react-loader-spinner";
import useTitle from "../../Title/Title";
import ViewDetails from "../Shared/ViewDetails";
AOS.init();
// import noImg from "../../../../public/nodata1.png";

const AllToys = () => {
  useTitle("All-Toys");
  const [allToys, setAllToy] = useState([]);
  const { loader } = useContext(AuthContext);
  // const allToys = useLoaderData();
  const [singleData, setSingleData] = useState({});
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // fetch(`http://localhost:5000/all-toys?limit=${limit}&name=${search}`)
    fetch(
      `https://toy-box-server-site.vercel.app/all-toys?limit=${limit}&name=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, [limit, search]);

  // console.log(allToys);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
    setSearch(event.target.search.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  

  return (
    <div>
      <div className="text-center my-12">
        <h3 className="text-3xl font-semibold mb-3 text-my-blue">
          All <span className="text-my-pink">Toys</span>
        </h3>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, porro
          iure eligendi vero vel quo.
        </p>
      </div>
      <ViewDetails singleData={singleData}></ViewDetails>

      {loader ? (
        <div className="flex justify-center items-center">
          <Bars
            height="80"
            width="80"
            color="#ff6799"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control my-3">
              <div className="input-group justify-center">
                <input
                  onChange={handleSearch}
                  name="search"
                  type="text"
                  placeholder="Search by toy name"
                  className="input input-bordered"
                />
                <button
                  type="submit"
                  className="btn btn-square bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue"
                >
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          <div className="overflow-x-auto  w-full mb-10">
            <table className="table w-full min-h-[35vh]">
              {/* head */}
              {allToys.length == 0 ? (
                <div className="flex justify-center">
                  <div>
                    {/* <img src={noImg} alt="" className="" /> */}
                    <p className="text-red text-2xl font-semibold text-center">
                      No data found
                    </p>
                  </div>
                </div>
              ) : (
                <thead>
                  <tr className="text-center text-my-blue">
                    <th></th>
                    <th>Toy Photo</th>
                    <th>Toy Name</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Seller</th>
                    <th>Sub-category</th>
                    <th>View Details</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {allToys.map((toy) => (
                  <SingleToyCard
                    key={toy._id}
                    toy={toy}
                    setSingleData={setSingleData}
                  ></SingleToyCard>
                ))}
              </tbody>
            </table>
            <div
              className={`flex items-center justify-center ${
                limit == 0 && "hidden"
              } ${allToys.length < 20 && "hidden"}`}
            >
              <button
                onClick={() => {
                  setLimit(0);
                }}
                className="btn px-10 text-base font-semibold bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue"
              >
                See All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllToys;
