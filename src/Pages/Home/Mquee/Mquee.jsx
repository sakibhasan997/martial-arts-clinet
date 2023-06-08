import React from 'react';
import brand from '../../../assets/assignment-12-img/brand/w1.png'
import brand2 from '../../../assets/assignment-12-img/brand/w2.png'
import brand3 from '../../../assets/assignment-12-img/brand/w3.png'
import brand4 from '../../../assets/assignment-12-img/brand/w4.png'
import brand5 from '../../../assets/assignment-12-img/brand/w5.png'
import brand6 from '../../../assets/assignment-12-img/brand/w6.png'
import Marquee from 'react-fast-marquee';

const Mquee = () => {
    return (
        <div>
            <div className='h-[115px]  bg-[#E80040]'>
                <div className='max-w-[1170px]  mx-auto flex'>
                <Marquee>
                    <img src={brand} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                    <img src={brand6} alt="" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Mquee;