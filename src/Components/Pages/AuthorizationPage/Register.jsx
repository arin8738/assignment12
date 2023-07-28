/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../Title/Title";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  useTitle("Register");
  const [error, setError] = useState("");
  const { Register, LoginWGoogle, Logout, handleUpdateProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginWGoogle = () => {
    LoginWGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, photoURL);
    Register(email, password)
      .then((result) => {
        setError("");
        handleUpdateProfile(name, photoURL)
          .then(() => {
            console.log("profile updated");
            // Logout();
            event.target.reset();
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Registration successful. Please Login',
              showConfirmButton: false,
              timer: 1500
            })
            navigate("/login");

          })
          .catch((error) => {
            console.log("update error", error);
            setError(error.message);
          });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      
      {/* <div className="hero bg-base-200"> */}
      <div className="hero">
        <div className="card my-10 w-4/5 md:w-2/5 px-5 md:px-8 shadow-2xl bg-base-100">
          <h3 className="text-3xl font-bold text-center mt-10 text-my-blue">
            Please <span className="text-my-pink">Register</span>
          </h3>

          <form onSubmit={handleRegister}>
            <div className="card-body">
            {error && <p className="text-red text-center">{error}</p>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="mt-2">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className=" text-my-blue hover:text-my-pink"
                    >
                      Login
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="divider">OR</div>
            </div>
          </form>
          <div className="card-body mb-5 -mt-14">
            <button
              onClick={handleLoginWGoogle}
              className="btn bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink w-full"
            >
              <FaGoogle className="mr-1 text-2xl" />
              Sing in with Google
            </button>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Register;
