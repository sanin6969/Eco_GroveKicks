import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="w-56 list-none">
          <h3 className="text-lg font-medium">Shop</h3>
          <NavLink>
            <li>Shop Men</li>
          </NavLink>
          <NavLink>
            <li>Shop Women</li>
          </NavLink>
          <NavLink>
            <li>LookBook</li>
          </NavLink>
          <NavLink>
            <li>Gift card</li>
          </NavLink>
          <NavLink>
            <li>Sale</li>
          </NavLink>
        </div>
        <div className="w-56 list-none">
          <h3 className="text-lg font-medium">About</h3>
          <NavLink>
            <li>Our Story</li>
          </NavLink>
          <NavLink>
            <li>Our materials</li>
          </NavLink>
          <NavLink>
            <li>Our Value</li>
          </NavLink>
          <NavLink>
            <li>Sustainablity</li>
          </NavLink>
          <NavLink>
            <li>Manufacture</li>
          </NavLink>
        </div>
        <div className="w-56 list-none">
          <h3 className="text-lg font-medium">Need Help?</h3>
          <NavLink>
            <li>FAQs</li>
          </NavLink>
          <NavLink>
            <li>Shipping and Returns</li>
          </NavLink>
          <NavLink>
            <li>Shoe Care</li>
          </NavLink>
          <NavLink>
            <li>Size Chart</li>
          </NavLink>
          <NavLink>
            <li>Contact Us</li>
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="bg-white   flex items-center justify-center  p-1 h-16">
        <h6 className="text-xs text-gray-600">
          © 2024 Recycled shoe store , Powered by ECOGROVE KICKS{" "}
        </h6>
      </div>
    </div>
  );
}

export default Footer;
