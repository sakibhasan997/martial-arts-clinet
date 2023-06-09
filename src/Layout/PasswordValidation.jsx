import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const PasswordValidation = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-[1170px] pt-20 mx-auto '>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default PasswordValidation;