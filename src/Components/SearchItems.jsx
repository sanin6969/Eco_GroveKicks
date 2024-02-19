import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../PAGES/Data";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
function SearchItems() {
    const Nav = useNavigate();
    const { item } = useParams();
    const { filterData, setFilterData } = useContext(UserContext);
    useEffect(() => {
        const FilteredData = () => {
            const elements = Products.filter(
                (p) =>
                    p.category.toLowerCase().includes(item.toLowerCase()) ||
                    p.sex.toLowerCase().includes(item.toLowerCase())
            );
            setFilterData(elements);
            console.log(elements);
        };
        FilteredData();
    }, [item, setFilterData]);

    return (
        <div>
            <Header />
            <div>
                <div className="m-5 bg-white  mb-5 pb-5 pt-5">
                    <h1 className="text-2xl text-slate-700 font-bold text-left max-w-lg m-10">
                        Search reasult for {item} :-
                    </h1>
                    <div className="m-10">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {filterData.map((val) => {
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
        </div>
    );
}

export default SearchItems;
