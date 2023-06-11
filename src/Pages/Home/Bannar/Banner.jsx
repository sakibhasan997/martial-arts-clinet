import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/assignment-12-img/banner/bg12.jpg'
import banner2 from '../../../assets/assignment-12-img/banner/bg13.jpg'
import banner3 from '../../../assets/assignment-12-img/banner/bg14.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <>

            <div className="carousel w-full lg:h-screen pt-20 lg:pt-0">
                <div id="slide1" className="carousel-item  relative w-full">
                    <img src={banner3} className="w-full " />
                    <div className="absolute rounded-xl flex justify-center text-center items-center h-full w-full right-0 bottom-0 ">

                        <div className='text-white hidden lg:block  space-y-0 lg:space-y-7 lg:pr-12 w-1/2'>
                            <h2 className='text-white lg:w-96  mx-auto lg:text-2xl  bg-black lg:px-5 lg:py-4 rounded-full lg:font-normal uppercase ' > Martial Arts Academy </h2>
                            <h1 className='bg-[#E80040] text-white text-xs lg:text-5xl font-bold lg:px-8 lg:py-4 rounded-full uppercase'>Train with best Legends</h1>
                            <p className='text-xs lg:text-xl' >
                                Every day we bring hope to millions of children in the world's
                                <br />
                                hardest places as a sign of God's unconditional love.</p>
                            <div>
                                <button className='btn bg-[#E80040] text-white border-none hover:btn-outline'>Apply Now <FaArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center lg:justify-center transform -translate-y-1/2 left-5 right-12 bottom-14 ">

                        <a href="#slide3" className='text-white mr-5' > <FaArrowLeft className='text-2xl' /> </a>
                        <a href="#slide2" className='text-red-600' > <FaArrowRight className='text-2xl' /> </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full " />
                    <div className="absolute rounded-xl flex justify-start text-start items-center h-full w-full right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white  space-y-0 lg:space-y-7 lg:pl-20 w-1/2'>
                            <h2 className='text-white mx-auto lg:text-7xl  lg:px-5 lg:py-4 rounded-full lg:font-bold uppercase' > Martial Arts </h2>
                            <h1 className='bg-red-700 text-white text-xs lg:text-3xl text-center font-bold lg:px-8 lg:py-4  uppercase'>Train with best Legends</h1>
                            <p className='text-xs lg:text-xl' >
                                Every day we bring hope to millions of children in the world's
                                <br />
                                hardest places as a sign of God's unconditional love.</p>
                            <div>
                                <button className='btn bg-red-700 text-white border-none hover:btn-outline'>Book Now <FaArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end lg:justify-center transform -translate-y-1/2 left-5 right-12 bottom-14">

                        <a href="#slide1" className='text-white mr-5' > <FaArrowLeft className='text-2xl' /> </a>
                        <a href="#slide3" className='text-red-600' > <FaArrowRight className='text-2xl' /> </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full " />
                    <div className="absolute rounded-xl flex justify-end text-end items-center h-full w-full right-0 bottom-0 bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <div className='text-white  space-y-0 lg:space-y-7 lg:pr-20 w-1/2'>
                            <h2 className='text-white mx-auto bg-red-700 lg:text-7xl  lg:px-8 lg:py-4  lg:font-bold uppercase' > Martial Arts </h2>
                            <h1 className=' text-white text-xs lg:text-3xl text-center font-bold lg:px-8 lg:py-4  uppercase'>Train with best Legends</h1>
                            <p className='text-xs lg:text-xl' >
                                Every day we bring hope to millions of children in the world's
                                <br />
                                hardest places as a sign of God's unconditional love.</p>
                            <div>
                                <button className='btn bg-red-700 text-white border-none hover:btn-outline'>Book Now <FaArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-start lg:justify-center  transform -translate-y-1/2 left-5 right-12 bottom-14">

                        <a href="#slide2" className='text-white mr-5' > <FaArrowLeft className='text-2xl' /> </a>
                        <a href="#slide1" className='text-red-600' > <FaArrowRight className='text-2xl' /> </a>
                    </div>
                </div>
            </div>

            {/* <Carousel className='pt-20'>
                <div className=''>
                    <img className='relative' src={banner3} />
                    <div className='absolute top-1/3 left-1/3'>
                        <div className='text-white text-2xl w-96 bg-black px-5 py-4 rounded-full'>
                            <h2 className='font-normal uppercase'>Martial Arts Academy </h2>
                        </div>
                        <br />
                        <h1 className='bg-red-600 text-white text-5xl font-bold px-8 py-4 uppercase'>Train with best Legends </h1>
                        <p>
                            Every day we bring hope to millions of children in the world's
                            <br />
                            hardest places as a sign of God's unconditional love.
                        </p>
                        <button>apply now</button>
                    </div>
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner} />
                </div>
            </Carousel> */}
        </>
    );
};

export default Banner;