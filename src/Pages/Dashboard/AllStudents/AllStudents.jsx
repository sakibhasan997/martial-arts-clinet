import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllStudents = () => {
    const { data: students = [], refetch } = useQuery(['students'], async () => {
        const res = await fetch('http://localhost:5000/students')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/students/admin/${user._id}`, {
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
        fetch(`http://localhost:5000/students/instructor/${user._id}`, {
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            students.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-[#2f6661] text-white"><FaUserGraduate /></button>
                                }</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#2f6661] text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td><button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
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