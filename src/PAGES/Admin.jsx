import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const Nav = useNavigate();
  return (
    <div>
      <h1 className="text-5xl text-slate-700 font-bold text-center bg-white p-10 m-10">
        ADMIN
      </h1>
      <div className="text-center">
        <button
          type="button"
          onClick={() => Nav("/Users")}
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold  text-md  text-center ml-2 pl-7 pr-7 pt-2 mb-4 pb-2">
          UESRS
        </button>
        <button
          onClick={() => Nav("/AdminProducts")}
          type="button"
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold  text-md  text-center ml-2 pl-7 pr-7 pt-2 mb-4 pb-2">
          PRODUCTS
        </button>
        <button
          type="button"
          onClick={() => Nav("/")}
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold  text-md  text-center ml-2 pl-7 pr-7 pt-2 mb-4 pb-2 mt-6">
          HOMEPAGE
        </button>
      </div>
    </div>
  );
}

export default Admin;
