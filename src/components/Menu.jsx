import Main from "./layout/Main";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth/AuthContext";


const Menu = () => {
    const { token } = useAuth();
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('semua');
    const [formData, setFormData] = useState({
        level: "tidak",
        qty: 0,
    })
    const [nonFood, setNonFood] = useState(false); const showModalHandler = (id) => {
        setItemId(id);
        setShowModal(true);

        const item = items.find((item) => item.id === id);

        if (item && item.category) {
            console.log(item.category.name);
            if (item.category.name !== "makanan") {
                setNonFood(true);
            } else {
                setNonFood(false);
            }
        } else {
            console.error('Item or category not found');
        }
    };
    const increment = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            qty: prevFormData.qty + 1, // Increment qty by 1
        }));
    };

    const decrement = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            qty: Math.max(prevFormData.qty - 1, 0), // Decrement qty by 1 but ensure it's not below 0
        }));
    };
    const getItems = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/items");
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/api/addToCart/${itemId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSelectedItems(response.data.data);
            console.log(response.data.data[0].pivot);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteSelectedItems = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/deleteFromCart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSelectedItems(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOrder = () => {
        const message = selectedItems.map(item => {
            const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.-]/g, '')) : item.price;
            return `${item.name} - ${formatPrice(price)} x ${item.pivot.qty} ${item.category.name === 'makanan' ? (item.pivot.level === "tidak" ? "= tidak pedas" : '= ' + item.pivot.level) : ''}`;
        }).join('\n');

        const phoneNumber = '628561179607'; // Ganti dengan nomor yang diinginkan

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message + '\nberikut lokasi saya saat ini (kirim share lok)')}`;

        window.open(whatsappUrl, '_blank');
    };

    const favHandle = async (id) => {
        const response = await axios.get(`http://localhost:8000/api/addToFav/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log(response);
    }

    useEffect(() => {
        getItems();
        deleteSelectedItems();
    }, [])
    return (
        <>
            <Main>
                <section>
                    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                        <button
                            type="button"
                            onClick={() => setCategory("semua")}
                            className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full focus:ring-4 focus:outline-none ${category === "semua"
                                ? "text-white bg-blue-700 border border-blue-600 focus:ring-blue-300"
                                : "text-blue-700 border border-blue-600 bg-white hover:bg-blue-700 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                }`}
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            onClick={() => setCategory("makanan")}
                            className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full focus:ring-4 focus:outline-none ${category === "makanan"
                                ? "text-white bg-blue-700 border border-blue-600 focus:ring-blue-300"
                                : "text-gray-900 border border-white hover:border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-900 dark:text-white"
                                }`}
                        >
                            Makanan
                        </button>
                        <button
                            type="button"
                            onClick={() => setCategory("minuman")}
                            className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full focus:ring-4 focus:outline-none ${category === "minuman"
                                ? "text-white bg-blue-700 border border-blue-600 focus:ring-blue-300"
                                : "text-gray-900 border border-white hover:border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-900 dark:text-white"
                                }`}
                        >
                            Minuman
                        </button>
                        <button
                            type="button"
                            onClick={() => setCategory("cemilan")}
                            className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full focus:ring-4 focus:outline-none ${category === "cemilan"
                                ? "text-white bg-blue-700 border border-blue-600 focus:ring-blue-300"
                                : "text-gray-900 border border-white hover:border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-900 dark:text-white"
                                }`}
                        >
                            Cemilan
                        </button>
                    </div>

                    <div className="md:flex justify-between items-start gap-4 max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-3/4">
                            {items.filter((item) => category === "semua" || item.category.name === category).map((item) => (
                                <div
                                    key={item.id} className="card-menu flex-col justify-between items-center gap-2 p-4" style={{ marginTop: "110px" }}>
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
                                        <button
                                            onClick={() => favHandle(item.id)}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        >
                                            <i className="bi bi-heart text-2xl"></i>
                                        </button>
                                        <span>
                                            <strong>{formatPrice(item.price)} </strong>
                                        </span>
                                        <button role="button" onClick={() => showModalHandler(item.id)}
                                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                            <i class="bi bi-cart text-2xl"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="card-menu w-1/4 h-96 sticky top-8 flex flex-col">
                            <dl className="max-w-md text-dark-900 divide-y divide-gray-200 dark:text-dark-400 dark:divide-gray-700 p-4 flex-grow">
                                {selectedItems.map((item) => (
                                    <div className="flex flex-col pb-3" key={item.id}>
                                        <dt className="mb-1 text-dark-500 md:text-lg dark:text-dark-400">{item.name}</dt>
                                        <dd className="text-lg font-semibold">
                                            {`${formatPrice(item.price)} x ${item.pivot.qty} ${item.category.name === 'makanan' ? (item.pivot.level === "tidak" ? "= tidak pedas" : '= ' + item.pivot.level) : ''}`}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="p-4 mt-auto">
                                <div className="flex justify-between items-center pb-3">
                                    <span className="text-lg font-semibold text-dark-700">Total Harga:</span>
                                    <span className="text-lg font-semibold text-dark-900">
                                        Rp {selectedItems.reduce((total, item) => {
                                            // Pastikan harga dalam bentuk angka
                                            const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.-]/g, '')) : item.price;
                                            const qty = item.pivot.qty; // Ambil kuantitas
                                            return total + (price * qty); // Kalikan harga dengan kuantitas
                                        }, 0).toLocaleString('id-ID')}
                                    </span>
                                </div>
                                <button onClick={handleOrder} className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>


                    </div>
                    {showModal ? (
                        <div
                            id="static-modal"
                            data-modal-backdrop="static"
                            tabIndex="-1"
                            aria-hidden="true"
                            className="fixed inset-0 z-50 flex justify-center items-start" // Posisi atas, tapi di tengah secara horizontal
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", top: 0 }} // Latar belakang semi-transparan dan posisi modal di atas
                        >
                            <div className="relative w-full max-w-2xl mt-10"> {/* Atur margin top untuk mengatur jarak dari atas */}
                                <div id="modal" className="relative bg-white rounded-lg shadow">
                                    <div className="flex items-center justify-between p-4 md:p-5">
                                        <button
                                            type="button"
                                            className="text-dark-400 bg-transparent hover:bg-gray-200 hover:text-dark-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-dark"
                                            data-modal-hide="static-modal"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[70vh]">
                                        <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
                                            {nonFood ? null : <div className="md:flex justify-center gap-4">
                                                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-40">
                                                    <input
                                                        id="bordered-radio-1"
                                                        type="radio"
                                                        value="tidak"
                                                        name="level" // Update to the same name
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        checked={formData.level === 'tidak'}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="bordered-radio-1"
                                                        className="w-full py-4 ms-2 text-sm font-medium text-dark-900 dark:text-dark-300"
                                                    >
                                                        tidak
                                                    </label>
                                                </div>
                                                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-40">
                                                    <input
                                                        id="bordered-radio-2"
                                                        type="radio"
                                                        value="sedang"
                                                        name="level" // Update to the same name
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        checked={formData.level === 'sedang'}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="bordered-radio-2"
                                                        className="w-full py-4 ms-2 text-sm font-medium text-dark-900 dark:text-dark-300"
                                                    >
                                                        sedang
                                                    </label>
                                                </div>
                                                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-40">
                                                    <input
                                                        id="bordered-radio-3"
                                                        type="radio"
                                                        value="pedas"
                                                        name="level" // Update to the same name
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        checked={formData.level === 'pedas'}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="bordered-radio-3"
                                                        className="w-full py-4 ms-2 text-sm font-medium text-dark-900 dark:text-dark-300"
                                                    >
                                                        pedas
                                                    </label>
                                                </div>
                                            </div>}


                                            {/* Counter Input */}
                                            <div className="md:flex justify-center mt-4 mb-4">
                                                <div className="relative flex items-center">
                                                    <button
                                                        type="button"
                                                        onClick={decrement} // Call decrement function
                                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                                    >
                                                        <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        id="counter-input"
                                                        name="qty" // Ensure the name matches with formData
                                                        value={formData.qty}
                                                        onChange={handleChange} // Keep this to handle manual input
                                                        className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                                        placeholder=""
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={increment} // Call increment function
                                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                                    >
                                                        <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Save Button */}
                                            <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button
                                                    data-modal-hide="static-modal"
                                                    type="submit"
                                                    className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                >
                                                    Simpan
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ) : null}

                </section>
            </Main>
        </>
    )
}

export default Menu;