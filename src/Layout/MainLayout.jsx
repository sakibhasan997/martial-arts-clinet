import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Banner from '../Pages/Home/Bannar/Banner';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Banner/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;