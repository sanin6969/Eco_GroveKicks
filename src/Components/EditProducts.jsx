import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Products } from "../PAGES/Data";
import { IoMdArrowBack } from "react-icons/io";
function EditProducts() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [sex, setSex] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const Nav = useNavigate();
    const { id } = useParams();
    const { data, setData } = useContext(UserContext);

    const filterProduct = Products.find((e) => e.id == id);

    const handleEdit = (event) => {
        event.preventDefault();
        const updatedProducts = Products.map((e) => {
            const updatedimage = image || e.image;
            const updatedname = name || e.name;
            const updatedsex = sex || e.sex;
            const updatedcategory = category || e.category;
            const updatedprice = price || e.price;
            if (e.id == id) {
                return {
                    ...data,
                    id: e.id,
                    image: updatedimage,
                    name: updatedname,
                    sex: updatedsex,
                    category: updatedcategory,
                    price: updatedprice,
                };
            } else {
                return e;
            }
        });
        setData(updatedProducts);
        Nav("/AdminProducts");
    };
    return (
        <div>
            <div>
                <h1 className="text-5xl text-slate-700 font-bold text-center m-10">
                    EDIT PRODUCTS
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 bg-slate-300 p-5 md:p-10">
                    {/* input boxes for edits */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <img
                                src={filterProduct.image}
                                className="w-24 h-24 mb-4 md:mb-0"
                            />
                            <input
                                type="text"
                                className="w-full md:w-48 border-2 mb-4 md:mb-0 md:mr-4"
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="Image URL"
                            />
                            <div className="flex-grow mx-4 p-1 m-1">
                                <input
                                    type="text"
                                    className="w-full border-2 mb-2"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={filterProduct.name}
                                />
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="w-1/2 mr-2 border-2"
                                        onChange={(e) => setSex(e.target.value)}
                                        placeholder={filterProduct.sex}
                                    />
                                    <input
                                        type="text"
                                        className="w-1/2 border-2"
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder={filterProduct.category}
                                    />
                                </div>
                                <input
                                    type="number"
                                    className="w-full border-2 mt-2"
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder={filterProduct.price}
                                />
                            </div>
                            <button
                                className="ml-4 text-black bg-slate-400 hover:text-white hover:bg-gray-700 p-2"
                                onClick={handleEdit}>
                                Edit Product
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => Nav("/AdminProducts")}
                    className="text-white border border-white bg-gray-800 hover:text-black hover:bg-white font-semibold text-left ml-2 pl-7 pr-7 pt-2 pb-2 mt-6">
                    <IoMdArrowBack />
                </button>
            </div>
        </div>
    );
}

export default EditProducts;
