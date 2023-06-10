import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTIitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { FaAccessibleIcon, FaDollarSign, FaRegClock } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Classes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext)

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('https://martial-arts-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setPopular(data);
            })
    }, [])


    const handleAddToCart = items => {
        console.log(items);
        if (user && user.email) {

        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <>
            <Helmet>
                <title>Martial Arts | Classes</title>
            </Helmet>
            <SectionTitle heading='Our All' colors='Classes' subHeading='Join our martial art club and be healthy.' />
            <div>
                <div className='grid gird-cols-1 lg:grid-cols-3 gap-5 my-10'>
                    {
                        popular.map(item => (
                            <div key={item._id}>
                                <div className="card card-compact w-full bg-base-100 shadow-xl ">
                                    <div >
                                        <figure><img className='w-[317px] h-[317px] relative rounded-t' src={item.img} alt="Shoes" /></figure>
                                        <div className='absolute  top-0 left-0  bg-[#E80040] text-white px-3 py-2'><h2>Time View</h2></div>
                                    </div>
                                    <div className="card-body text-gray-500">
                                        <h2 className="card-title text-black text-2xl font-semibold"> <span className='text-red-600 font-serif'>Classes</span> | {item.className}</h2>
                                        <h2 className="card-title text-black text-xl font-semibold"> <span className='text-red-600 font-serif'>Instructors</span> | {item.instructorName}</h2>
                                        <p className='flex gap-3'> <FaAccessibleIcon /> availableSeats: {item.availableSeats}</p>
                                        <p className='italic flex gap-3' > <FaRegClock /> {item.time}</p>
                                        <p className='flex gap-3'> <FaDollarSign /> Price:  ${item.price}</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => handleAddToCart(item)} className="btn bg-[#E80040] text-white">Select </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Classes;