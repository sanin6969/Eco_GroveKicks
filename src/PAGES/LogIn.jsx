import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Header from "../Components/Header";
function LogIn() {
  const Nav = useNavigate();
  const { signupUser, setUser } = useContext(UserContext);
  const [gmail, setGmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = signupUser.find((item) => item.email == gmail || item.username == gmail);
    if (userData && userData.password == Password) {
      setUser(userData);
      Nav("/Collections");
    } else {
      setUser(null);
      alert("incorrect email or password");
    }
  };
  return (
    <div>
      <Header />
      <div className="mt-10 ">
        <form
          className="max-w-md mx-auto p-11 rounded-3xl  bg-slate-700"
          onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email or Username
            </label>
            <input
              type="text"
              onChange={(e) => setGmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="enter your Email or Username"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Enter your password"
            />
          </div>
          <p className=" font-medium text-white pb-3">
            New User{" "}
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

export default LogIn;
