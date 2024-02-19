import React, { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function AddProducts() {
  const Nav = useNavigate();
  const [addProduct, setAddproduct] = useState({
    name: "",
    category: "",
    price: 0,
    sex: "",
    image: "",
  });

  const { data, setData } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-5xl text-slate-700 font-bold text-center  m-10">
        ADD PRODUCTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1  p-5">
        <div className="mt-3 ">
          <form className="max-w-md mx-auto p-11 rounded-md  bg-slate-400">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Product Name
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setAddproduct({ ...addProduct, name: e.target.value })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Product Category
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setAddproduct({ ...addProduct, category: e.target.value })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="category"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Product Price
              </label>
              <input
                type="number"
                onChange={(e) =>
                  setAddproduct({ ...addProduct, price: e.target.value })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="price"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Product Sex
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setAddproduct({ ...addProduct, sex: e.target.value })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="men/women"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Product Image
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setAddproduct({ ...addProduct, image: e.target.value })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="image url"
                required
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addProduct.name !== "" &&
                  addProduct.category !== "" &&
                  addProduct.price !== 0;
                addProduct.image !== ""
                  ? setData([...data, addProduct])
                  : alert("entr the complete details");
                Nav("/AdminProducts");
              }}
              type="submit"
              className="text-gray-950 bg-slate-500 hover:bg-slate-300  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              add product
            </button>
          </form>
        </div>
      </div>
      <button
        type="button"
        onClick={() => Nav("/AdminProducts")}
        className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold   text-left ml-2 pl-7 pr-7 pt-2 mb-4 pb-2 mt-6">
        <IoMdArrowBack />
      </button>
    </div>
  );
}

export default AddProducts;
