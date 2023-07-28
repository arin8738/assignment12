/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SingleMyToy from "./SingleMyToy";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import { Bars } from "react-loader-spinner";
import Swal from "sweetalert2";
import useTitle from "../../Title/Title";
// import noImg from "../../../../public/nodata1.png";
import { useNavigate } from "react-router-dom";

const MyToys = () => {
  useTitle("My-Toys");
  const { user, loader, Logout } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [del, setDel] = useState(0);
  const [sort, setSort] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    // fetch(`http://localhost:5000/my-toys?email=${user?.email}`, {
    fetch(`https://toy-box-server-site.vercel.app/my-toys?email=${user?.email}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        sort: sort,
        authorization: `barer ${localStorage.getItem("access-token")}`
      },
      // body: JSON.stringify({sort}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // setMyToys(data)

        if(!data?.error){
          setMyToys(data);
        }
        else{
          Logout()
          .then(()=>{
            navigate("/login");
          })
          .catch(error => {
            console.log(error)
          })
        }
      });
  }, [loader, del, sort]);

  const handleDelete = (id) => {
    // alert(`delete ${id}`)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:5000/delete/${id}`, {
        fetch(`https://toy-box-server-site.vercel.app/delete/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setDel(del + 1);
              Swal.fire("Deleted!", "The car has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
    setSort(event.target.value);
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      {loader ? (
        <div className="flex justify-center items-center mt-20">
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
        <div className="mt-10">
          <div className="text-center my-5">
        <h3 className="text-3xl font-semibold mb-3 text-my-blue">
          My <span className="text-my-pink">Toys</span>
        </h3>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, porro
          iure eligendi vero vel quo.
        </p>
      </div>
          <div className="flex justify-end my-3">
            <select
              onChange={handleFilter}
              className="select select-bordered bg-my-blue text-white font-bold text-lg"
            >
              <option disabled selected>
                Sort By Price
              </option>
              <option value={1}>Ascending</option>
              <option value={-1}>Descending</option>
            </select>
          </div>

          <div className="overflow-x-auto  w-full mb-10">
            <table className="table w-full">
              {myToys.length == 0 ? (
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
                    <th>Delete</th>
                    <th>Toy Photo</th>
                    <th>Toy Name</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Seller</th>
                    <th>Sub-category</th>
                    <th>Update</th>
                  </tr>
                </thead>
              )}

              <tbody>
                {myToys.map((toy) => (
                  <SingleMyToy
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                  ></SingleMyToy>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
