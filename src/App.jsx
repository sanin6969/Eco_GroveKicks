import "./App.css";
import LogIn from "./PAGES/LogIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./PAGES/SignUp";
import HomePage from "./PAGES/HomePage";
import Footer from "./Components/Footer";
import LookBook from "./Components/LookBook";
import Collections from "./Components/Collections";
import AllProducts from "./Components/AllProducts";
import Cart from "./Components/Cart";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContextProvider";
import SearchItems from "./Components/SearchItems";
import Contact from "./Components/Contact";
import Logout from "./Components/Logout";
import Users from "./Components/Users";
import AdminProducts from "./Components/AdminProducts";
import EditProducts from "./Components/EditProducts";
import AddProducts from "./Components/AddProducts";
import Admin from "./PAGES/Admin";
import AdminLogin from "./PAGES/AdminLogin";
import ProductView from "./Components/ProductView";
function App() {
  return (
    <div>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="SearchItems/:item" element={<SearchItems />} />
            <Route path="LogIn" element={<LogIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="LookBook" element={<LookBook />} />
            <Route path="Collections" element={<Collections />} />
            <Route path="/:id" element={<ProductView />} />
            <Route path="AllProducts" element={<AllProducts />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="admin" element={<Admin />} />
            <Route path="Users" element={<Users />} />
            <Route path="adminLogin" element={<AdminLogin />} />
            <Route path="AdminProducts" element={<AdminProducts />} />
            <Route path="/editproducts/:id" element={<EditProducts />} />
            <Route path="addproducts" element={<AddProducts />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
