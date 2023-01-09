import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-6/12 min-h-screen flex justify-center items-center bg-primary">
          <div>
            <div className="card glass min-w-[55vh] min-h-[70vh]">
              <div className="card-body relative">
                <h2 className="text-4xl font-bold text-white capitalize">
                  Your Dream Jobs is <br /> Waiting for you <br /> Login Now!
                </h2>
              </div>
              <figure className="flex justify-end">
                <img
                  src="https://i.ibb.co/NKPbTMD/pexels-kampus-production-6829577-removebg-preview.png"
                  alt=""
                  className="absolute right-[-60px] bottom-0 w-9/12"
                />
              </figure>
              <div
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center absolute
               bottom-28 left-[-30px] image"
              >
                <img
                  src="https://i.ibb.co/xYL08pv/handshake.png"
                  className="w-12"
                  alt=""
                />
              </div>
              <div className="">
                <div
                  className="bg-white w-16 h-16 rounded-full flex items-center justify-center absolute 
               right-[-30px] top-32 image"
                >
                  <img
                    src="https://i.ibb.co/CKWhcS0/peace.png"
                    className="w-12"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 flex items-center justify-center">
          <div className="px-52">
            <div className="text-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-3xl font-medium mb-2">Log In</h2>
                <p>
                  Login here for as a job seeker or a employeer and find your
                  dream job or the best employeer for your team
                </p>
              </div>
            </div>
            <div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="p-2 border border-gray-400 rounded-md focus:outline-none w-full text-xl"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="p-2 border border-gray-400 rounded-md focus:outline-none w-full text-xl"
                />
              </div>
            </div>
            <div className="flex items-center my-3 justify-between">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox mr-2" />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
              <Link to="/" className="text-primary">
                Reset Password
              </Link>
            </div>
            <div>
              <button className="btn btn-block btn-primary">Login</button>
              <button className="btn btn-block btn-outline mt-5">
                <img
                  src="https://i.ibb.co/D78mNTT/google.png"
                  className="w-7 mr-3"
                  alt=""
                />
                Sign in with google
              </button>
            </div>
            <div className="text-center mt-10">
              <p className="">
                Don't have an account yet?{" "}
                <Link className="hover:underline text-primary" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
