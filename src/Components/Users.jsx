import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function Users() {
  const { signupUser} = useContext(UserContext);
  const Nav = useNavigate();
  return (
    <div>
      <h1 className="text-5xl text-slate-700 font-bold text-center  m-10">
        USERS
      </h1>
      <div className="m-10 bg-slate-200 p-5">
        {signupUser.map((val) => (
          <div key={1} className="bg-white p-4 rounded-lg shadow-md m-5">
            <div className="flex justify-between items-center">
              <img
                className="w-24 h-24 mb-3 rounded-full"
                src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              />{" "}
              <div className="flex-grow mx-4 text-left">
                <h2 className=" font-medium">
                  Username :{" "}
                  <span className="text-lg font-bold">{val.username}</span>
                </h2>
                <p className="">
                  Gmail: <span className="text-gray-600">{val.email}</span>
                </p>
                <p className="">
                  Password:{" "}
                  <span className="text-gray-600">{val.password}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => Nav("/Admin")}
        className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold   text-left ml-2 pl-7 pr-7 pt-2 mb-4 pb-2 mt-6">
        <IoMdArrowBack />
      </button>
    </div>
  );
}

export default Users;
