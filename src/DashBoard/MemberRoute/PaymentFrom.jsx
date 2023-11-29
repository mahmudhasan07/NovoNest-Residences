import { loadStripe } from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { useContext, useEffect, useRef, useState } from 'react';
import useAxios, { AxiosSecure } from '../../Components/Axios/useAxios';
import { Context } from '../../Components/ContextAPI/ContextAPI';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import useFetch from '../../Components/Hooks/useFetch';
import useFetch2 from '../../Components/Hooks/useFetch2';

const PaymentFrom = () => {
    const { user } = useContext(Context)
    const stripe = useStripe();
    const elements = useElements();
    const id = useParams()
    const ID = id.id
    const coupon = useRef()
    const [data] = useFetch2('payment', id.id)
    const [dataCoupon] = useFetch('coupons')
    const axiosLink = useAxios(AxiosSecure)
    const [prices, setprice] = useState(0)
    const [disabled, setdisabled] = useState('btn-disabled')
    const [clientSecret, setclientSecret] = useState('')
    const [errorMessage, setErrorMessage] = useState(null);
    const [discount, setdiscount] = useState(0)
    const [Rent, setRent] = useState(prices)
    const email = data?.email
    const apartmentNo = data?.apartmentNo
    const block = data?.block
    const floor = data?.floor
    const rent = data?.rent
    const rentMonth = data?.rentMonth
    const status = "complete"
    const paymentSuccess = {email,apartmentNo,block,floor,Rent,rentMonth,status }
    useEffect(() => {
        if (data !== "l") {
            setprice(data.rent)
        }
        const totalrent = prices - discount
        setRent(totalrent)
        if (Rent > 0) {
            axiosLink.post('/create-payment-intent', { price: Rent })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setclientSecret(res.data.clientSecret)


                })
        }
    }, [axiosLink, data, prices, Rent, discount, ID])
    // console.log(price, "paise");

    const handlecoupon = () => {
        const values = coupon.current.value
        if (dataCoupon !== "l") {
            const coupon = dataCoupon.filter((element, idx) => element.code == values)
            console.log(coupon[0].discount);
            const finalRent = ((5 / 100) * prices)
            setdiscount(finalRent)
        }

    }
    const handlechange = () => {
        // console.log(coupon.current.value.length);
        if (coupon.current.value.length > 1) {
            setdisabled('inline-block')
        }
        else {
            setdisabled('btn-disabled')
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }
            }
        })
        if (confirmError) {
            console.log("Confirm Error Payment");
            Swal.fire({
                title: "Error Payment",
                text: "Your payment is unsuccessfully ",
                icon: "error"
            });
        }
        else {
            console.log("Success", paymentIntent);
            Swal.fire({
                title: "SuccessFully Payment",
                text: "Your payment is successfully complete",
                icon: "success"
            });
            axiosLink.put(`/payment`, { ID, Rent })
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    };
    return (
        <section>
            <div className='flex flex-wrap justify-around'>
                <div className='lg:flex-1'>
                    <form className='' onSubmit={handleSubmit}>
                        <CardElement className='border-2 p-2 rounded-lg w-1/2'
                            options={{
                                style: {
                                    base: {
                                        fontSize: '18px',
                                        color: '#424770',
                                        padding: "0%",
                                        // backgroundColor : "green",
                                        '::placeholder': {
                                            color: 'gray',
                                            padding: "",
                                            backgroundColor: "lightblue"
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                        // backgroundColor : "green"

                                    },
                                },
                            }}
                        />
                        <button className='btn btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                            Pay
                        </button>
                    </form>
                </div>
                <div className='border-2 rounded-lg p-2'>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Enter Your Coupon Code</h1>
                        <input ref={coupon} onChange={handlechange} className='border-2 rounded-lg border-black' placeholder="Coupon code"></input>
                        <button onClick={handlecoupon} className={`btn btn-sm  ${disabled}`}>Coupon</button>

                    </div>
                    <div className='border-2 border-gray-400 my-3 p-1 rounded-lg'>
                        <h1>Rent : {prices}</h1>
                        <h1>Discount : {discount}</h1>
                        <hr />
                        <h1>Total Rent : {Rent}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentFrom;