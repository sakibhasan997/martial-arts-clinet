import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';

const InstructorsAddClass = () => {
    const { user } = useAuth();
    const [myClass, setMyClass] = useState([]);

    const url = `http://localhost:5000/classes?email=${user?.email}`
    console.log(user);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [url])

    return (
        <div>
            <Helmet>
                <title>Martial Arts | My All Classes</title>
            </Helmet>
            <SectionTitle heading='My All' colors='Classes' subHeading='Join our martial art club and be healthy.' />

            <div className="overflow-x-auto w-full px-20">
                <table className="table w-full mt-5 px-8">
                    {/* head */}
                    <thead className='bg-[#2f6661] text-white px-8'>
                        <tr>
                            <th>#</th>
                            <th>Images</th>
                            <th>Class Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th className='text-end'>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClass.map((item, index) => <tr
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
                                    {item.instructorName}
                                </td>
                                <td>
                                    {item.instructorEmail}
                                </td>
                                <td className="">${item.price}</td>
                                <td className='text-end'>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-[#2f6661]  text-white"><FaPencilAlt></FaPencilAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default InstructorsAddClass;