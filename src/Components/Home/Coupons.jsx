import { useContext, useEffect } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from 'sweetalert2'
import useFetch from "../Hooks/useFetch";
import AOS from 'aos'


const Coupons = () => {
    const { user } = useContext(Context)
    const [data] = useFetch('coupons')
    console.log(data);
    const handlecoupon = (data) => {
        if (user) {
            console.log(data);
        }
        else {
            Swal.fire({
                title: "Can't get coupon",
                text: "You are not a user, please login first and get the coupon",
                icon: "error"
            });
        }

    }
    return (
        <section className="">
            <h1 className="text-3xl text-center font-bold mb-10">Coupons Section</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {
                    data == "l" ?
                        <h1>loading</h1>
                        :
                        data?.map((element, idx) => <Coupon key={element._id} card={element} id={idx}></Coupon>)
                }
            </div>
        </section>
    );
};

const Coupon = ({ card, id }) => {
    console.log(id);
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section>
            <div data-aos="fade-right"
                // data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-delay={`${id * 300}`} className="border-2 h-full rounded-lg flex flex-col border-black p-2 w-60">
                <h1 className="text-xl font-bold">{card.title}</h1>
                <h1 className="text-lg font-semibold">{card.discount}% off</h1>
                <p>{card.note}</p>
                <div className="mt-auto">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-sm  w-full my-2" onClick={() => document.getElementById('my_modal_1').showModal()}>Collect</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Copy copy your coupon code</h3>
                            <p className="py-4">Your coupone code is <span className="font-semibold">{card.code}</span></p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </section>
    )
}

export default Coupons;