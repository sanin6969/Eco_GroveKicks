import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Products } from "../PAGES/Data";
const AdminProducts = () => {
  const removeItem = (id) => {
    const updatedCart = data.filter((item) => item.id !== id);
    setData(updatedCart);
  };
  const Nav = useNavigate();
  const { data, setData } = useContext(UserContext)
  return (
    <div>
      <h1 className="text-5xl text-slate-700 font-bold text-center  m-10">
        PRODUCTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 bg-slate-300 p-10">
        <button
          type="button"
          onClick={() => Nav("/addproducts")}
          className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold max-w-40  text-left ml-2 pl-7 pr-7 pt-2 mb-4 pb-2 mt-6">
          Add Products
        </button>
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24" />
              <div className="flex-grow mx-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-yellow-700">
                  Sex: {item.sex} , Category: {item.category}
                </p>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center"></div>
              <button
                className="ml-4 text-green-600 hover:text-green-800"
                onClick={() => Nav(`/editproducts/${item.id}`)}>
                Edit
              </button>
              <button
                className="ml-4 text-red-600 hover:text-red-800"
                onClick={() => removeItem(item.id)}>
                Remove
              </button>
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
};

export default AdminProducts;
