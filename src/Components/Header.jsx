import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import { RiAdminFill } from "react-icons/ri";
function Header() {
  const nav = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    nav(`/SearchItems/${search}`);
    setSearch("");
  };
  const { user, search, setSearch } = useContext(UserContext);
  return (
    <div className="bg-white p-5 flex flex-col md:flex-row items-center justify-between mt-5 shadow-md">
      <NavLink to="/" className="text-3xl font-serif font-medium">
        ECOGROVE KICKS
      </NavLink>
      <form onSubmit={HandleSubmit} className="mt-4 md:mt-0">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Products"
          className="border-2 text-center"
        />
      </form>
      <div className="flex gap-6 font-semibold font-sans mt-4 md:mt-0">
        <NavLink to="/Collections" className="hover:text-black text-slate-400">
          COLLECTIONS
        </NavLink>
        <NavLink to="/LookBook" className="hover:text-black text-slate-400">
          LOOKBOOK
        </NavLink>
        <NavLink to="/Contact" className="hover:text-black text-slate-400">
          CONTACT US
        </NavLink>
      </div>
      <div className="flex gap-6 font-semibold font-sans mt-4 md:mt-0">
        <h1>{user && user.username}</h1>
        <div
          onClick={() => {
            nav("/Logout");
          }}
          className="text-black text-2xl cursor-pointer">
          <FaUser />
        </div>
        <div
          onClick={() => {
            nav("/adminLogin");
          }}
          className="text-black text-2xl cursor-pointer">
          <RiAdminFill />
        </div>
        <div
          onClick={() => (user ? nav("/Cart") : nav("/LogIn"))}
          className="relative inline-flex items-center text-sm font-medium text-center text-black cursor-pointer">
          <IoCart className="text-2xl" />
          {user && user.cart.length > 0 && (
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-black -top-2 -end-2 bg-yellow-400 rounded-full">
              {user.cart.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
