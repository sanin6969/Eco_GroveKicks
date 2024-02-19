import { useState } from "react";
import { UserContext } from "./UserContext";
import { Products } from "../PAGES/Data";

export const UserContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState(Products);
  const [adproduct, setAdproduct] = useState(Products);
  const [user, setUser] = useState(null);
  const [signupUser, setSigupUser] = useState([]);
  const [Product, setProduct] = useState({});
  return (
    <UserContext.Provider
      value={{
        filterData,
        setFilterData,
        signupUser,
        setSigupUser,
        Product,
        setProduct,
        data,
        setData,
        search,
        setSearch,
        user,
        setUser,
        adproduct,
        setAdproduct,
      }}>
      {children}
    </UserContext.Provider>
  );
};
