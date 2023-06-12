import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllStudents = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: students = [], refetch } = useQuery(['students'], async () => {
        const res = await axiosSecure.get('/students')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://martial-arts-server.vercel.app/students/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${students.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`https://martial-arts-server.vercel.app/students/instructor/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${students.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div className='mx-20 my-20'>
            <Helmet>
                <title>Martial Arts | AllStudents</title>
            </Helmet>
            <div>
                <h3 className="text-3xl font-semibold">Total Students: {students.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full mt-5">
                    {/* head */}
                    <thead className='bg-[#2f6661] text-white '>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Instructors</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            students.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button disabled={user.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-[#2f6661] text-white"><FaUserGraduate /></button>
                                </td>
                                <td>
                                    <button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#2f6661] text-white"><FaUserShield></FaUserShield></button>
                                </td>
                            </tr>)
                        }

                        {/* onClick={() => handleDelete(user)} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStudents;