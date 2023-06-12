import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';
import useClass from '../../../Hooks/useClass';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageClass = () => {
    const [classes, , refetch] = useClass();
    const [axiosSecure] = useAxiosSecure();
    // console.log(classes);

    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/classes/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Martial Arts | Manage Class</title>
            </Helmet>
            <SectionTitle heading='Manage All' colors='Classes' subHeading='Join our martial art club and be healthy.' />

            <div className="overflow-x-auto w-full px-12 ">
                <table className="table w-full ">
                    {/* head */}
                    <thead className='my-color text-white'>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Instructor Name</th>
                            <th>Instructor email</th>
                            <th> Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>
                                    {item.instructorEmail}
                                </td>
                                <td>
                                    {item.availableSeats}
                                </td>
                                <td className="">${item.price}</td>
                                <td className='text-center'>
                                    {item.status}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClass;