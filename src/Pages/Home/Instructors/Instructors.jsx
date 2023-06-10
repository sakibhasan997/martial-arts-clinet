import React from 'react';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img from '../../../assets/assignment-12-img/T-img/1 (1).jpg'
import img2 from '../../../assets/assignment-12-img/T-img/2.jpg'
import img3 from '../../../assets/assignment-12-img/T-img/3.jpg'
import img4 from '../../../assets/assignment-12-img/T-img/4.jpg'



const Instructors = () => {


    return (
        <>
            <div className='mt-20'>
                <SectionTitle heading='Our Popular' colors='Instructors' subHeading='Join our martial art club and be healthy.' />
            </div>
            <Swiper
                // install Swiper modules
                modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
                
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                className="mySwiper mx-auto"
            >
                <SwiperSlide>
                    <img className='mx-auto ' src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={img4} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Instructors;