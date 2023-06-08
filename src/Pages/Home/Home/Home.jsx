import React from 'react';
import Welcome from '../Extra-section/Welcome';
import { Helmet } from 'react-helmet-async';
import Mquee from '../Mquee/Mquee';

const Home = () => {
    return (
        <>
            <div className='max-w-[1170px] my-10 mx-auto '>
                <Helmet>
                    <title>Martial Arts | Home</title>
                </Helmet>
                <Welcome />

            </div>
            <Mquee />
        </>
    );
};

export default Home;