import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
function AdminLogin() {
  const Nav = useNavigate();
  const [admin, setAdmin] = useState("");
  const [adminpassword, setAdminpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (admin == "admin" && adminpassword == "admin") {
      Nav("/Admin");
    } else {
      alert("invalid admin");
    }
  };
  return (
    <div>
      <Header />
      <div className="mt-10 ">
        <form
          className="max-w-md mx-auto p-11 rounded-3xl  bg-slate-700"
          onSubmit={handleSubmit}>
          <h1 className="block mb-2 text-2xl font-medium text-white text-center">
            ADMIN LOGIN
          </h1>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Admin username
            </label>
            <input
              type="text"
              onChange={(e) => setAdmin(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              onChange={(e) => setAdminpassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Enter your password"
            />
          </div>
          <p className=" font-normal text-white pb-3">
            Not an Admin{" "}
            <NavLink to="/SignUp">
              <span className="text-blue-300">Sign Up?</span>
            </NavLink>
          </p>
          <button
            type="submit"
            className="text-white bg-slate-600 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
