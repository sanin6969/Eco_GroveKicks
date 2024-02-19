import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function Users() {
  const { signupUser } = useContext(UserContext);
  const Nav = useNavigate();
  return (
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="text-3xl md:text-5xl text-slate-700 font-bold text-center my-6 md:my-10">
        USERS
      </h1>
      <div className="mx-auto md:w-3/4 bg-slate-200 p-4 md:p-5">
        {signupUser.map((val, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md my-4 md:my-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <img
                className="w-24 h-24 mb-3 md:mb-0 rounded-full"
                src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                alt="User Profile"
              />
              <div className="flex-grow mx-4 text-center md:text-left">
                <h2 className="font-medium text-lg md:text-xl">
                  Username: <span className="font-bold">{val.username}</span>
                </h2>
                <p className="text-gray-600">
                  Gmail: <span className="font-bold">{val.email}</span>
                </p>
                <p className="text-gray-600">
                  Password: <span className="font-bold">{val.password}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => Nav("/Admin")}
        className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold text-left px-4 md:px-7 py-2 my-4 md:mb-0 md:mt-6">
        <IoMdArrowBack />
      </button>
    </div>
  );
}

export default Users;
