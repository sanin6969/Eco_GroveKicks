import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";

function Cart() {
  const { user, setUser } = useContext(UserContext);

  const removeItem = (id) => {
    const updatedCart = user.cart.filter((item) => item.id !== id);
    setUser((prevUser) => ({
      ...prevUser,
      cart: updatedCart
    }));
  };
  
  // const removeItem = (id) => {
  //   // let itemremove = user.cart.filter((v) => v.id != id);
  //   // user.cart = itemremove;


  //   // setUser((prevdata) =>({
  //   //   ...prevdata,
  //   //     cart: prevdata.cart.filter((v) => v.id!==id)
  //   // }));
  // };
  const [add, setAdd] = useState(0);

  const Increment = (item) => {
    setAdd((item.amount += 1));
  };
  const Decrement = (item) => {
    if (item.amount && item.amount > 1) {
      setAdd((item.amount -= 1));
    }
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">
        <h1 className="text-5xl text-slate-700 font-bold text-center  m-10">
          SHOPPING CART
        </h1>

        {user.cart.length == 0 ? (
          <h1 className="text-3xl text-yellow-600 font-bold text-center  m-10">
            No items in the CART
          </h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {user.cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24" />
                  <div className="flex-grow mx-4">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200  px-2 py-1 rounded-l"
                      onClick={() => Decrement(item)}>
                      -
                    </button>
                    <span className="px-4">{item.amount}</span>
                    <button
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                      onClick={() => Increment(item)}>
                      +
                    </button>
                  </div>
                  <button
                    className="ml-4 text-red-600 hover:text-red-800"
                    onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 ">
          <h1 className="text-2xl text-slate-700 font-bold text-center  mt-10">
            TOTAL :{" "}
            {user.cart.reduce(
              (acc, item) => (acc += item.price * item.amount),
              0
            )}
          </h1>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
