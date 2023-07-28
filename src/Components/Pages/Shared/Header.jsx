/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
// import logo from "../../../../public/mybox.ico";

const Header = () => {
  // Website logo, Website name, Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture.

  const { user , Logout} = useContext(AuthContext);
  // console.log(user)
  const handleLogout = () =>{
    Logout()
    .then(() => {
      console.log("Log out successfully")
    })
    .catch(err => console.log(err));
  }

  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-my-pink text-lg font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-toys"
          className={({ isActive }) =>
            isActive ? "text-my-pink text-lg font-semibold" : ""
          }
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="blogs"
          className={({ isActive }) =>
            isActive ? "text-my-pink text-lg font-semibold" : ""
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const conditionalMenu = (
    <>
      <li>
        <NavLink
          to="/my-toys"
          className={({ isActive }) =>
            isActive ? "text-my-pink text-lg font-semibold" : ""
          }
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-a-toy"
          className={({ isActive }) =>
            isActive ? "text-my-pink text-lg font-semibold" : ""
          }
        >
          Add New Toy
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
              {user && conditionalMenu}
            </ul>
          </div>
          <Link to="/" className="text-my-blue text-3xl md:text-5xl font-bold relative flex items-center">
            {/* <img src={logo} alt=""  */}
            {/* // className="absolute bottom-5 -left-10"  */}
            {/* /> */}
            Toy<span className="text-my-pink ">Box</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu}
            {user && conditionalMenu}
            {/* {conditionalMenu} */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
            <img
            className="h-12 w-12 rounded-full mx-3"
            title={user?.displayName}
             src={user?.photoURL} alt="userImg" />
              <Link
              onClick={handleLogout}
                // to="/login"
                className="btn btn-outline hover:bg-my-pink hover:border-my-pink text-my-blue border-my-blue"
              >
                Log out
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline hover:bg-my-pink hover:border-my-pink text-my-blue border-my-blue"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
