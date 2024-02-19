import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-10 mb-10">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user && user.username}{" "}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user && user.email}{" "}
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                onClick={() => {
                  nav("/LogIn");
                }}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Log In
              </a>
              <a
                onClick={() => {
                  setUser(null);
                  nav("/");
                }}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
