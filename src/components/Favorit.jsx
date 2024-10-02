import Main from "./layout/Main";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth/AuthContext";
const Favorite = () => {
    const { token } = useAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);

    const getItems = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/favItems", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            setItems(response.data.data);
            console.log(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <Main>
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto mb-10 mt-10">
                        {items.map((item) => (
                            <div key={item.id} className="card-menu flex-col justify-between items-center gap-2 p-4" style={{ marginTop: "110px" }}>
                                <div className="relative h-32 text-center">
                                    <img
                                        src={`/assets/img/${item.path}`}
                                        alt="foto menu kwetiau"
                                        className="w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between gap-4 max-w-sm p-4">
                                        <div className="flex-col">
                                            <p className="mb-3 font-normal text-dark-700 dark:text-white-400">
                                                <strong>{item.name}</strong>
                                            </p>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-heart text-2xl"></i>
                                    </a>
                                    <span>
                                        <strong>{formatPrice(item.price)}</strong>
                                    </span>
                                    <a
                                        href="/menu"
                                        data-modal-target="static-modal"
                                        data-modal-toggle="static-modal"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-cart text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Main>
        </>
    )
}

export default Favorite;