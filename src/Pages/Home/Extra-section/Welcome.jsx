import React from 'react';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';
import icons from '../../../assets/assignment-12-img/icons/judo.png'
import icons2 from '../../../assets/assignment-12-img/icons/karate.png'
import icons3 from '../../../assets/assignment-12-img/icons/martial-arts (1).png'
import icons4 from '../../../assets/assignment-12-img/icons/martial-arts.png'
import about from '../../../assets/assignment-12-img/about/3.png'

const Welcome = () => {
    return (
        <div>
            <SectionTitle heading='Welcome To' colors='Martial Art' subHeading='Join our martial art club and be healthy.' />
            <div className=' grid grid-cols-1 lg:grid-cols-2  gap-5 py-10'>
                <div className=''>
                    <h2 className='font-semibold lg:text-3xl font-serif text-center lg:text-start'>Welcome To Our <span className='text-red-600'>Martial Art</span></h2>

                    <p className='py-3 text-center lg:text-start'>combining both physical  cultivate well-rounded individuals.</p>

                    <p className='text-gray-500 text-center lg:text-start'>Martial arts refer to a variety of traditional combat practices and systems that have been developed and refined over centuries. These disciplines emphasize self-defense, physical fitness, mental discipline, and personal growth. Martial arts can be categorized into various styles and techniques, each with its unique philosophies and training methods.</p>
                    <div className='my-8 grid grid-cols-2 lg:grid-cols-2 lg:gap-10 items-center'>
                        <div>
                            <div className='flex items-center mb-4'>
                                <div className='w-14 mr-4 '>
                                    <img  src={icons} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-2xl text-red-600'>Amerucan Karate</h2>
                                    <p>Martial arts refer </p>
                                </div>
                            </div>
                            <div className='flex items-center mb-4'>
                                <div className='w-14 mr-4'>
                                    <img src={icons2} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-2xl text-red-600'>Combatives</h2>
                                    <p>Martial arts refer </p>
                                </div>
                            </div>
                        </div>

                        <div>
                        <div className='flex items-center mb-4'>
                                <div className='w-14 mr-4'>
                                    <img src={icons3} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-2xl text-red-600'>Shuri Ryu</h2>
                                    <p>Martial arts refer</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-14 mr-4'>
                                    <img src={icons4} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-2xl text-red-600'>Oom Ynug Doe</h2>
                                    <p>Martial arts refer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img src={about} alt="" />
                </div>
            </div>

            <div className='h-[115px] my-8 bg-[#E80040]'>
                <div className='h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center '>
                    <h2 className=' font-semibold lg:text-4xl text-center px-8 text-white'>Martial arts refer to a variety </h2>
                    <span className='flex justify-center gap-8'>
                        <button className='btn '>View More</button>
                        <button className='btn'>Apply Now</button>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Welcome;