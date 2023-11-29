import useAxios from "../../Components/Axios/useAxios";
import useFetch from "../../Components/Hooks/useFetch";
import { useForm } from "react-hook-form"

const ManageCoupon = () => {
    const [data, refetch] = useFetch('coupons')
    const axiosLink = useAxios()
    console.log(data);
    const { register, reset, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        axiosLink.post(`/coupons`, data)
            .then(res => {
                console.log(res.data);
                reset()
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })



    }
    return (
        <section>
            <h1 className="text-3xl my-5 text-center font-bold">Available Coupons</h1>
            <div className="flex justify-end mr-10 my-5">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn glass bg-blue-600 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Coupon</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-2 flex-wrap">
                                <input className="border-2 border-black p-1 rounded-lg" placeholder="title" {...register('title')} />
                                <input className="border-2 border-black p-1 rounded-lg" placeholder="discount" {...register('discount')} />
                                <input className="border-2 border-black p-1 rounded-lg" placeholder="code" {...register('code')} />
                            </div>
                            <textarea className="border-2 border-black my-2 p-1 rounded-xl" placeholder="Enter Note" name="" id="" cols="60" rows="5" {...register('note')} /> <br />
                            <input className="btn w-full glass bg-blue-700 text-white text-base" type="submit" />
                        </form>
                    </div>
                </dialog>
            </div>
            <div>

            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-5 ">
                    {
                        data == "l" ?
                            <h1>Loading</h1>
                            :
                            data?.map((element, idx) => <Coupon key={idx} card={element} id={idx}></Coupon>)
                    }
                </div>

            </div>
        </section>
    );
};

const Coupon = ({ card, id }) => {
    const [data, refetch] = useFetch('coupons')
    const axiosLink = useAxios()

    const handledelete = (id) => {
        console.log(id);
        axiosLink.delete(`/coupons/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div data-aos="fade-right"
            // data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay={`${id * 300}`}
            className="w-52  border-2 flex flex-col rounded-xl bg-gray-200 p-2">
            <div
                className="flex-grow">
                <h1 className="text-xl font-bold">{card.title}</h1>
                <h1 className="text-lg font-semibold">{card.discount}% off</h1>
                <p>{card.note}</p>
            </div>
            <button onClick={() => handledelete(card._id)} className="btn btn-sm bg-blue-700 text-white glass">Delete</button>

        </div>
    )
}

export default ManageCoupon;