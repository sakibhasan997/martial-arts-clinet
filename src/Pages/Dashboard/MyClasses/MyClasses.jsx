import React from 'react';
import { Helmet } from 'react-helmet-async';
import useQueries from '../../../Hooks/useQueries';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyClasses = () => {

    const [cart, refetch] = useQueries();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <div className='my-12'>
            <Helmet>
                <title>Martial Arts | Student Class</title>
            </Helmet>
            <div>
                <span className='flex justify-around items-center'>
                    <h2 className="text-2xl">TOTAL CLASS: {cart.length}</h2>
                    <h2 className="text-2xl">TOTAL PRICE: ${total}</h2>
                    <Link to="/dashboard/payment">
                        <button className="btn bg-[#2f6661] text-white">PAY</button>
                    </Link>
                </span>
            </div>
            <div className="overflow-x-auto w-full px-20">
                <table className="table w-full mt-5 px-8">
                    {/* head */}
                    <thead className='bg-[#2f6661] text-white px-8'>
                        <tr>
                            <th>#</th>
                            <th>Images</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th className='text-end'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">${item.price}</td>
                                <td className='text-end'>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-[#E80040]  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;