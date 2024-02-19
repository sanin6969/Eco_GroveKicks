import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function AllProducts() {
    const Nav = useNavigate();
    const { data } = useContext(UserContext);
    return (
        <div>
            <div className="m-5 bg-white  mb-5 pb-5 pt-5">
                <div className="m-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {data.map((val) => {
                            return (
                                <div
                                    key={val.id}
                                    className="bg-white rounded-lg border"
                                    onClick={() => Nav(`/${val.id}`)}>
                                    <img
                                        className="h-auto max-w-full  hover:scale-105  rounded-md"
                                        src={val.image}
                                    />
                                    <div className=" text-center p-7 ">
                                        <h1 className="text-2xl font-semibold font-sans ">
                                            {val.name}
                                        </h1>
                                        <h1 className="font-bold text-gray-600 hover:text-yellow-600">
                                            ${val.price}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
