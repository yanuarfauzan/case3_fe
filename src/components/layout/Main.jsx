import React, { useEffect } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from 'react-helmet';
import '../../index.css';

const Main = ({ children }) => {
    useEffect(() => {
        const menuButton = document.getElementById('menu-button');
        const navbar = document.getElementById('navbar-default');

        const toggleNavbar = () => {
            navbar.classList.toggle('hidden');
        };

        menuButton.addEventListener('click', toggleNavbar);

        return () => {
            menuButton.removeEventListener('click', toggleNavbar);
        };
    }, []);

    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>foodies</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                />
            </Helmet>
            <body className="full-height" style={{
                backgroundImage: "url('/assets/img/bg.jpeg')",
            }}>
                <div className="section h-auto m-4">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </>
    );
}

export default Main;
