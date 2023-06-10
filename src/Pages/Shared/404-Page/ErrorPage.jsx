import React from 'react';
import error from '../../../assets/assignment-12-img/404-Page/killer-404-page-dribble-5f3d622fef9b7.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div>
            <img className='  relative' src={error} alt="" />
            <Link className='mr-20 absolute bottom-20 right-20' to='/'>
                <button className='btn btn-primary '>Back To Home <FaArrowRight/> </button>
            </Link>
        </div>
    );
};

export default ErrorPage;