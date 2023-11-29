import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import PaymentFrom from './PaymentFrom';
import { loadStripe } from '@stripe/stripe-js';
import { useRef, useState } from 'react';

const PaymentSuccess = () => {
    const coupon = useRef()
    
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Pk_TEST)
    console.log(import.meta.env.VITE_Payment_Pk_TEST);
    
    return (
        <section>
            <div className=''>
                <Elements stripe={stripePromise} >
                    <PaymentFrom ></PaymentFrom>
                </Elements>
            </div>
            
        </section>
    );
};

export default PaymentSuccess;