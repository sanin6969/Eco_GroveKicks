import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
function LookBook() {
  return (
    <div className="px-4">
  <Header />
  <h1 className="text-6xl font-serif text-center mt-8">LookBook</h1>

  {/* First Image and Description */}
  <div className="mt-9">
    <img
      className="w-full"
      src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
      alt="LookBook 1"
    />
    <div className="flex flex-col md:flex-row items-center justify-center m-10 p-8 bg-white text-center">
      <h1 className="text-4xl font-medium md:mr-6 md:mb-0">Fall/Winter 2024</h1>
      <p className="text-gray-600 mt-4 md:mt-0 md:ml-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum vitae beatae fugiat
        doloremque animi corrupti voluptatem architecto, aut voluptate
      </p>
      <NavLink to="# ">
        <button
          type="button"
          className="text-black mt-4 md:mt-0 md:ml-5 hover:text-yellow-600 text-md px-5 py-2.5"
        >
          SHOP NOW
        </button>
      </NavLink>
    </div>
  </div>

  {/* Second Image and Description */}
  <div className="mt-9">
    <img
      className="w-full"
      src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg"
      alt="LookBook 2"
    />
    <div className="flex flex-col md:flex-row items-center justify-center m-10 p-8 bg-white text-center">
      <h1 className="text-4xl font-medium md:mr-6 md:mb-0">Spring/Summer 2024</h1>
      <p className="text-gray-600 mt-4 md:mt-0 md:ml-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum vitae beatae fugiat
        doloremque animi corrupti voluptatem architecto, aut voluptate
      </p>
      <NavLink to="# ">
        <button
          type="button"
          className="text-black mt-4 md:mt-0 md:ml-5 hover:text-yellow-600 text-md px-5 py-2.5"
        >
          SHOP NOW
        </button>
      </NavLink>
    </div>
  </div>

  {/* Third Image and Description */}
  <div className="mt-9">
    <img
      className="w-full"
      src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg"
      alt="LookBook 3"
    />
    <div className="flex flex-col md:flex-row items-center justify-center m-10 p-8 bg-white text-center">
      <h1 className="text-4xl font-medium md:mr-6 md:mb-0">Go & Play</h1>
      <p className="text-gray-600 mt-4 md:mt-0 md:ml-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum vitae beatae fugiat
        doloremque animi corrupti voluptatem architecto, aut voluptate
      </p>
      <NavLink to="# ">
        <button
          type="button"
          className="text-black mt-4 md:mt-0 md:ml-5 hover:text-yellow-600 text-md px-5 py-2.5"
        >
          SHOP NOW
        </button>
      </NavLink>
    </div>
  </div>

  {/* Fourth Image and Description */}
  <figure className="relative max-w-full mt-9 mb-10">
    <img
      className="w-full"
      src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1.jpg"
      alt="LookBook 4"
    />
    <figcaption className="absolute px-4 text-lg text-white bottom-10">
      <h1 className="text-2xl md:text-3xl">BEETR FOR THE PEOPLE BETTER FOR THE PLANET</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia laborum inventore
        hic minima labore.
      </p>
    </figcaption>
  </figure>
</div>

  );
}

export default LookBook;
