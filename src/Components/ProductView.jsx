import React, { useContext, useEffect, useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { Products } from "../PAGES/Data";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Header from "./Header";

function ProductView() {
    const Nav = useNavigate();
    const { Product, setProduct, user ,setUser} =
        useContext(UserContext);
    const { id } = useParams();
    useEffect(() => {
        const filterProduct = Products.find((e) => e.id == id);
        setProduct(filterProduct);
    }, [id, setProduct]);

    // const addToCart = () => {
    //     const already=user.cart.some((item)=>item.id==Product.id)
    //     if(!already){
    //         user.cart.push({...Product,amount:1})
    //     }
    //     // let already = false;
    //     // for (const item of user.cart) {
    //     //     if (item.id === Product.id) {
    //     //         break;
    //     //     }
    //     // }
    //     // if (!already) {
    //     //     user.cart.push({ ...Product, amount: 1 });
    //     // }
    //     // console.log(user.cart, "user cart array");
    // };
    const addToCart = () => {
        const alreadyInCart = user.cart.some(item => item.id === Product.id);
        if (!alreadyInCart) {
            setUser(prevUser => ({
                ...prevUser,
                cart: [...prevUser.cart, { ...Product, amount: 1 }]
            }));
        }
    };
    
    return (
        <>
            <div>
                <Header />
                {/* products and products details */}
                <div className="flex flex-col md:flex-row bg-white mx-5 md:mx-10 mt-10 p-5 md:p-20">
                    <img className="h-auto max-w-full md:max-w-xl" src={Product.image} />
                    {/* product details */}
                    <div className="flex flex-col justify-center p-5 md:ml-20 sm:text-center">
                        <h1 className="text-yellow-600 text-center md:text-left mb-3">
                            {Product.category}, {Product.sex}
                        </h1>
                        <h1 className="text-3xl font-medium mb-3">{Product.name}</h1>
                        <h1 className="text-2xl font-semibold mb-3 text-gray-600">
                            <span className="font-bold text-gray-700">${Product.price}</span>{" "}
                            & Free Shipping
                        </h1>
                        <p className="text-gray-600 font-medium mb-3 text-center md:text-left sm:text-left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                            distinctio itaque delectus voluptatem voluptates pariatur officia
                            quia adipisci facilis nihil?
                        </p>
                        <div className="flex justify-center md:justify-start mb-5">
                            <button
                                className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-md"
                                onClick={user ? addToCart : () => Nav("/LogIn")}>
                                ADD TO CART
                            </button>
                        </div>
                        <hr className="mb-3" />
                        <h1 className="text-gray-600 font-medium mb-3 text-center md:text-left">
                            Categories:
                            <span className="text-yellow-600">
                                {Product.category}, {Product.sex}
                            </span>
                        </h1>
                        <div className="text-4xl flex justify-center md:justify-start gap-5 mb-3">
                            <FaCcVisa />
                            <FaCcMastercard />
                            <FaCcPaypal />
                            <FaCcApplePay />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductView;
