import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const PopularClass = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('/public/classes.json')
            .then(res => res.json())
            .then(data => {
                setPopular(data);
            })
    }, [])

    return (
        <>
            <SectionTitle heading='Our Popular' colors='Classes' subHeading='Join our martial art club and be healthy.' />
            <div>
                <div className='grid gird-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        popular.map(item => (
                            <div key={item.id}>
                                <div className="card card-compact w-full bg-base-100 shadow-xl ">
                                    <div >
                                        <figure><img className='w-[317px] h-[317px] relative rounded-t' src={item.img} alt="Shoes" /></figure>
                                        <div className='absolute  top-0 left-0  bg-[#E80040] text-white px-3 py-2'><h2>Time View</h2></div>
                                    </div>
                                    <div className="card-body text-gray-500">
                                        <h2 className="card-title text-black text-2xl font-semibold"> <span className='text-red-600 font-serif'>Private</span> | {item.className}</h2>
                                        <p className='italic flex gap-3' > <FaRegClock /> {item.time}</p>
                                        <p className='flex gap-3'> <FaMapMarkerAlt /> {item.location}</p>
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

export default PopularClass;
// bg-gradient-to-r from-[#15151559] to-[rgba(21, 21, 21, 0)]