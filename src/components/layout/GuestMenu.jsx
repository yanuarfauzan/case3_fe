import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

const GuestMenu = () => {
    const { setToken, setUser } = useAuth();
    
    const [formData, setFormData] = useState({
        email: "test@example.com",
        password: "@Yanuar17",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:8000/api/login", formData);
        console.log(response.data.data);
        setToken(response.data.data.token);
        setUser(response.data.data);
    };
    return (
        <div>
            <button id="dropdownLeftEndButton" data-dropdown-toggle="dropdownLeftEnd" data-dropdown-placement="left-end" className="me-3 mb-3 md:mb-0 text-dark bg-dark-700 hover:bg-dark-800 focus:ring-4 focus:outline-none focus:ring-dark-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800" type="button"><svg className="w-2.5 h-2.5 me-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg><strong>Login</strong>
            </button>

            <div id="dropdownLeftEnd" className="card-login z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80">
                <form className="max-w-sm mx-auto p-4" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-dark-900 dark:text-dark">Your email</label>
                        <input type="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-dark-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="block mb-2 text-sm font-medium text-dark-900 dark:text-dark">Your password</label>
                        <input type="password" value={formData.password} onChange={handleChange} id="password" className="bg-gray-50 border border-gray-300 text-dark-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button
                        type="submit"
                        className="py-2.5 px-5 text-sm font-medium text-white-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    )
}

export default GuestMenu;