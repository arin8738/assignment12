/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ViewDetails from "../Shared/ViewDetails";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import "../../Pages/Shared/CustomStyle.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

const ShopByCategory = () => {
  // Police-Car Super-Car Truck

  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [cars, setCars] = useState([]);
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    // fetch(`http://localhost:5000/toys?category=${category}`)
    fetch(`https://toy-box-server-site.vercel.app/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 4) {
          let newData = data.slice(0, 4);
          setCars(newData);
        }
      });
  }, [category]);

  // console.log(cars);

  const showMessage = ()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You are not nog in yet! Login to see details',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  return (
    <div>
      <ViewDetails singleData={singleData}></ViewDetails>
      <div className="text-center mt-24 mb-8">
        <h3 className="text-3xl font-semibold mb-3">Shop By Category</h3>
        <p className="text-base">
        Make play time a blast with our finest toys and games!
        </p>
      </div>

      <div className="flex justify-center mb-10 text-2xl font-semibold">
        {/* <div className=" mb-10"> */}
        <Tabs>
          <TabList>
            <Tab onClick={() => setCategory("Police-Car")}>Police Cars</Tab>
            <Tab onClick={() => setCategory("Super-Car")}>Super Cars</Tab>
            <Tab onClick={() => setCategory("Truck")}>Trucks</Tab>
          </TabList>

          <TabPanel>
            {/* <h2>Any content 1</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              {cars.map((car) => (
                <div
                  // style={{"box-shadow": "3px 4px 10px 0px #929492"}}
                  className="border-my-blue border-2 rounded-lg p-3 text-md font-semibold mx-auto"
                  key={car._id}
                >
                  <img
                    src={car?.photo}
                    alt=""
                    className="w-[295px] h-[295px]"
                  />
                  <div className="divider"></div>
                  <h3 className="text-2xl font-semibold">{car?.name}</h3>
                  <div className=" mb-4 mt-2 text-lg">
                    <p>Price: ${car?.price}</p>
                    <p className="flex items-center">
                      
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={car.rating}
                        readOnly
                      />
                      <span className="ml-2">{car?.rating}</span>
                    </p>
                  </div>

                  <div className="">
                    {!user ? (
                      <Link onClick={showMessage}
                        to="/login"
                        className="btn btn-sm btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
                      >
                        View Details
                      </Link>
                    ) : (
                      <label
                        onClick={() => {
                          setSingleData(car);
                        }}
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
                      >
                        View Details
                      </label>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              {cars.map((car) => (
                <div
                  // style={{"box-shadow": "3px 4px 10px 0px #929492"}}
                  className="border-my-blue border-2 rounded-lg p-3 text-md font-semibold mx-auto"
                  key={car._id}
                >
                  <img
                    src={car?.photo}
                    alt=""
                    className="w-[295px] h-[295px]"
                  />
                  <div className="divider"></div>
                  <h3 className="text-2xl font-semibold">{car?.name}</h3>
                  <div className=" mb-4 mt-2 text-lg">
                    <p>Price: ${car?.price}</p>
                    <p className="flex items-center">
                      
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={car.rating}
                        readOnly
                      />
                      <span className="ml-2">{car?.rating}</span>
                    </p>
                  </div>

                  <div className="">
                    {!user ? (
                      <Link
                        to="/login"
                        className="btn btn-sm btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
                      >
                        View Details
                      </Link>
                    ) : (
                      <label
                        onClick={() => {
                          setSingleData(car);
                        }}
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
                      >
                        View Details
                      </label>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              {cars.map((car) => (
                <div
                  // style={{"box-shadow": "3px 4px 10px 0px #929492"}}
                  className="border-my-blue border-2 rounded-lg p-3 text-md font-semibold mx-auto"
                  key={car._id}
                >
                  <img
                    src={car?.photo}
                    alt=""
                    className="w-[295px] h-[295px]"
                  />
                  <div className="divider"></div>
                  <h3 className="text-2xl font-semibold">{car?.name}</h3>
                  <div className=" mb-4 mt-2 text-lg">
                    <p>Price: ${car?.price}</p>
                    <p className="flex items-center">
                      
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={car.rating}
                        readOnly
                      />
                      <span className="ml-2">{car?.rating}</span>
                    </p>
                  </div>

                  <div className="">
                    {!user ? (
                      <Link
                        to="/login"
                        className="btn btn-sm btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
                      >
                        View Details
                      </Link>
                    ) : (
                      <label
                        onClick={() => {
                          setSingleData(car);
                        }}
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue"
                      >
                        View Details
                      </label>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
