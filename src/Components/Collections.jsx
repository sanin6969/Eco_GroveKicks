import React, { useContext } from "react";
import AllProducts from "./AllProducts";
import { Products } from "../PAGES/Data";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
function Collections() {
  const { setData } = useContext(UserContext);
  const filterBySex = (v) => {
    const element = Products.filter((p) => p.sex === v);
    setData(element);
    console.log(element);
  };
  const All = () => {
    setData(Products);
  };
  return (
    <div>
      <Header />
      <h1 className="text-5xl text-slate-700 font-bold text-left max-w-lg m-10">
        COLLECTIONS
      </h1>
      <div className="text-center">
        <button
          onClick={All}
          type="button"
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold  text-md  text-center ml-2 pl-7 pr-7 pt-2 mb-4 pb-2">
          ALL
        </button>
        <button
          onClick={() => filterBySex("men")}
          type="button"
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold  text-md  text-center ml-2 pl-7 pr-7 pt-2 mb-4 pb-2">
          MEN
        </button>
        <button
          onClick={() => filterBySex("woman")}
          type="button"
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold  text-md  text-center ml-2 pl-7 pr-7 pt-2 mb-4 pb-2">
          WOMAN
        </button>
      </div>
      <AllProducts />
    </div>
  );
}

export default Collections;
