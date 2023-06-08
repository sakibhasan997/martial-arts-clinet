import React from 'react';
import { Outlet } from 'react-router-dom';

const PasswordValidation = () => {
    return (
        <div className='max-w-[1170px] mt-5 mx-auto '>
            <Outlet/>
        </div>
    );
};

export default PasswordValidation;