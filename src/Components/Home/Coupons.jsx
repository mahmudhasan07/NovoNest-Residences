import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from 'sweetalert2'


const Coupons = () => {
    const { user } = useContext(Context)
    const handlecoupon = (data) => {
        if (user){
            console.log(data);
        }
        else{
            Swal.fire({
                title: "Can't get coupon",
                text: "You are not a user, please login first and get the coupon",
                icon: "error"
            });
        }

    }
    return (
        <section className="flex justify-center gap-5">
            <div className="card w-60 border-2 p-2">
                <h1 className="text-xl font-semibold">New Rent Discount</h1>
                <h1 className="font-semibold">5% Off</h1>
                <p>Pay up to 50,000 tk get the 5% off of your rent</p>
                <button onClick={() => handlecoupon('GCD-5')} className="btn btn-sm mt-auto w-fit ml-auto">Collect Coupon</button>
            </div>
            <div className="card w-60 border-2 p-2">
                <h1 className="text-xl font-semibold">Winter Rent Discount</h1>
                <h1 className="font-semibold">15% Off</h1>
                <p>Rent our flats in winter and get the 15% off of your rent</p>
                <button onClick={() => handlecoupon('GCD-15')} className="btn btn-sm w-fit mt-auto ml-auto">Collect Coupon</button>
            </div>
            <div className="card w-60 border-2 p-2">
                <h1 className="text-xl font-semibold">Happy New Year Discount</h1>
                <h1 className="font-semibold">18% Off</h1>
                <p>If you rent our flat before ending happy new year get the 18% off of your rent</p>
                <button onClick={() => handlecoupon('GCD-18')} className="btn btn-sm w-fit mt-auto ml-auto">Collect Coupon</button>
            </div>
            <div className="card w-60 border-2 p-2">
                <h1 className="text-xl font-semibold">Happy New Year Discount</h1>
                <h1 className="font-semibold">20% Off</h1>
                <p>If you rent our flat get the 18% off of your rent</p>
                <button onClick={() => handlecoupon('GCD-20')} className="btn btn-sm w-fit mt-auto ml-auto">Collect Coupon</button>
            </div>
        </section>
    );
};

export default Coupons;