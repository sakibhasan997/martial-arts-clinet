import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTIitle/SectionTitle';

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://martial-arts-server.vercel.app/all-instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])



    return (
        <div className='my-w'>
            <Helmet>
                <title>Martial Arts | Instructors</title>
            </Helmet>
            <SectionTitle heading='Our All' colors='Instructors' subHeading='Join our martial art club and be healthy.' />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Instructors</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>See Classes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructors.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.instructorName} </td>
                                        <td>{item.instructorEmail}</td>
                                        <td>
                                            <button  className="btn bg-[#E80040] text-white">See Classes</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllInstructors;