import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyEnroll = () => {
    const { user } = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    const [payments, setPayment] = useState([]);

    // const { refetch, data: payment = []} = useQuery({
    //     queryKey: ['payments', user?.email],
    //     enabled: !loading,
    //     // enabled: !!user?.email && !!localStorage.getItem('access-token'),
    //     queryFn: async () =>{
    //         const res = await axiosSecure(`/payments?email=${user?.email}`)
    //         console.log(res.data);
    //         return res.data;
    //     }
    // })

    // useEffect(() => {
    //     fetch(`http://localhost:5000/payments?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])

    // return[payment, refetch]

    useEffect(() => {
        fetch(`https://martial-arts-server.vercel.app/payments/student`)
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [])


    return (
        <div>
            <div className="overflow-x-auto w-full px-20">
                <table className="table w-full mt-12 px-8">
                    {/* head */}
                    <thead className='bg-[#2f6661] text-white px-8'>
                        <tr>
                            <th>#</th>
                            <th>transactionId</th>
                            <th>date</th>
                            <th>Price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>
                                    {item.date}
                                </td>
                                <td className="">${item.price}</td>
                                <td className="">{item.status}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnroll;