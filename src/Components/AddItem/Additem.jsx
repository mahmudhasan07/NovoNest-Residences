import { useForm } from "react-hook-form"
import { Form } from "react-router-dom";
import useAxios, { AxiosSecure } from "../Axios/useAxios";

const Additem = () => {
    const axiosLink = useAxios(AxiosSecure)
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        const image1 = data.image1
        const image2 = data.image2
        const image3 = data.image3
        const image4 = data.image4
        const floor = parseInt(data.floor)
        const rent = parseInt(data.rent)
        const block = data.block
        const apartmentNo = parseInt(data.apartmentNo)
        const info = {image1,image2,image3,image4,floor,rent,block,apartmentNo}

        axiosLink.post(`/apartments`, info)
        .then(res=>{
            console.log(res.data);
        })



    
    }
    return (
        <section>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-around flex-wrap">
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">image1</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("image1")} />
                    </div>
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">image2</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("image2")} />
                    </div>
                    </div>
                    <div className="flex justify-around flex-wrap">
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">image3</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("image3")} />
                    </div>
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">image4</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("image4")} />
                    </div>
                    </div>
                    <div className="flex justify-around flex-wrap">
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">Floor No</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("floor")} />
                    </div>
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">rent</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("rent")} />
                    </div>
                    </div>
                    <div className="flex justify-around flex-wrap">
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">Block Name</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("block")} />
                    </div>
                    <div className="form-control lg:w-fit w-full mx-1">
                        <label className="label">
                            <span className="label-text">Apartments Number</span>
                        </label>
                        <input className="border-2 p-2 lg:w-96  rounded-xl border-black" {...register("apartmentNo")} />
                    </div>
                    </div>
<div>
    <button className="btn">Submit</button>
</div>
                </form>
            </div>

        </section>
    );
};

export default Additem;