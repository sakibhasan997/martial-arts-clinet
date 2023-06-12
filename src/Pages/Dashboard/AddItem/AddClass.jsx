import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './AddClass.css'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


// const img_hosting_token = import.meta.env.VITE_IMG
const AddClass = () => {
    const { user, loading } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    // const [axiosSecure] = useAxiosSecure();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        data.status = "pending"
        

        fetch("http://localhost:5000/classes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    reset();
                }
            });



        // const formData = new FormData();
        // formData.append('img', data.img[0])

        // fetch(img_hosting_url,{
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgResponse =>{
        //     console.log(imgResponse);
        // })

        console.log(data);
    }
    // console.log(img_hosting_token);

    return (
        <div>
            <Helmet>
                <title>Martial Arts | Add Class</title>
            </Helmet>
            <SectionTitle heading='Add a New' colors='Classes' subHeading='Join our martial art club and be healthy.' />

            {/* Start */}
            <div className=' my-40 mx-auto '>
                <div className='toy-title text-center my-5'>
                    <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>ADD YOUR CLASS</h1>
                </div>
                <div className='toy-form text-center'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        <input
                            className="text-input"
                            {...register("instructorName", { required: true })}
                            placeholder="Instructor name"
                            defaultValue={user?.displayName}

                        />
                        <input
                            className="text-input"
                            {...register("className", { required: true })}
                            placeholder="Class name"

                        />

                        <input
                            className="text-input"
                            {...register("price", { required: true })}
                            placeholder="price"
                        // defaultValue="30k"
                        />

                        <input
                            className="text-input"
                            {...register("availableSeats", { required: true })}
                            placeholder="Available seats"
                            type="number"
                        />
                        <br />
                        <input
                            className="text-input"
                            {...register("img", { required: true })}
                            placeholder="image link"
                            type="url"
                        />
                        <input
                            className="text-input"
                            value={user?.email}
                            {...register("instructorEmail", { required: true })}
                            placeholder="Instructor email"
                            type="email"
                        />
                        {/* <select defaultValue='pending' className="text-input" {...register("status", { required: true })}>
                            <option value="pending">pending</option>
                            <option value="approved">approved</option>
                            <option value="denied">denied</option>
                        </select> */}
                        <br />
                        <input className="btn submit-btn" value="Add Class" type="submit" />
                    </form>
                </div>
            </div>
            {/* End */}

        </div>
    );
};

export default AddClass;