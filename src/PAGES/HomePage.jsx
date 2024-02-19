import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AllProducts from "../Components/AllProducts";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function HomePage() {
  return (
    <div>
      <Header />
      <div>
        {/* intro image in homepage */}
        <figure className="relative max-w-1200px min-h-800px p-10 ">
          <a href="#">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  "
              src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-10">
            <h1>LOVE THE PLANET WE WALK ON</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia laborum inventore hic minima labore.
            </p>
          </figcaption>
        </figure>

        {/* about us and image in homepage */}

        <div className="m-5 md:m-10 bg-white p-5 flex flex-col md:flex-row">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
            alt=""
            className="w-full md:w-1/2"
          />
          <div className="m-5 flex flex-col gap-4 md:gap-16">
            <h1 className="text-2xl text-black hover:text-yellow-600">About Us</h1>
            <h1 className="text-5xl text-left max-w-lg">
              Selected materials designed for comfort and sustainability
            </h1>
            <p className="text-1xl text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              maxime pariatur quod, nisi voluptatem vel dolorum modi dolores
              quaerat vero. At laborum facilis dolore voluptas?
            </p>
          </div>
        </div>

        {/* logos and names in homepage */}
        <div className="flex justify-center md:justify-around">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
            className="h-12 md:h-auto"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
            className="h-12 md:h-auto"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
            className="h-12 md:h-auto"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
            className="h-12 md:h-auto"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
            className="h-12 md:h-auto"
          />
        </div>

        {/* All Products */}
        <AllProducts />
        {/* two images in homepage of men and women */}
        <div className="grid grid-cols-2">
          <figure className="relative max-w-1200px min-h-800px p-10  ">
            <img
              className="filter grayscale"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            />
          </figure>
          <figure className="relative max-w-1200px min-h-800px p-10  ">
            <img
              className="filter grayscale"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            />
          </figure>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
