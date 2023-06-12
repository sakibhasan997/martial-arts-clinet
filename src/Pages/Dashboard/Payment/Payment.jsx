import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTIitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useQueries from '../../../Hooks/useQueries';

// TODO:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useQueries()
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='mx-auto'>
            <Helmet>
                <title>Martial Arts | Payment</title>
            </Helmet>
            <SectionTitle heading='Please Process' colors='Payment' subHeading='Join our martial art club and be healthy.' />
            <h1 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>Please inter your card Number</h1>
            <div className=' w-96 mx-auto my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;