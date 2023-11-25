import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import registration from '../../../public/Registration.json'
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import Swal from 'sweetalert2'
import { Context } from "../ContextAPI/ContextAPI";

const Registration = () => {
    const axiosLink = useAxios(AxiosSecure)
    const { signUser, logOut, updateUser } = useContext(Context)
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const image = { image: data.image[0] }
        const name = data.name
        const email = data.email
        const password = data.password
        console.log(image);
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`, image, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                const photo = res.data.data.display_url
                const user_info = { name, email, photo }
                console.log(user_info);
                signUser(email, password)
                    .then(res => {
                        console.log(res);
                        updateUser(name, photo)
                            .then(res => {
                                console.log(res);
                                Swal.fire({
                                    title: "Registration Successful",
                                    text: "Registration Successfully Complete",
                                    icon: "success"
                                });
                                axiosLink.post(`/users`, user_info)
                                    .then(res => {
                                        console.log(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err.message);
                                    })

                                logOut()
                            })
                            .catch(error => {
                                console.log(error);
                            })

                    })
                    .catch(error => {
                        console.log(error);
                        toast.error('Password must be atleast 6 character', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    })

            })

    }
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content gap-20 justify-around flex-col lg:flex-row-reverse">
                    <div className="text-center w-full lg:text-left">
                        <Lottie animationData={registration}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* From Section */}
                        <form className="card-body my-auto" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-3xl font-bold text-center">Registration Here</h1>
                            <hr className="border-2 rounded-xl" />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className="border-2 p-1  rounded-xl border-black" {...register("name")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="border-2 p-1  rounded-xl border-black" {...register("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Photo</span>
                                </label>
                                <input className="" {...register("image")} type="file" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className="border-2 p-1 rounded-xl border-black" {...register("password")} type="password" />
                            </div>
                            <NavLink to={`/login`} className={`flex justify-end text-lg font-semibold `}>ALready User???</NavLink>

                            <input className="btn" type="submit" />
                            <div className="divider">OR</div>
                            <button className="btn"><FcGoogle></FcGoogle> LogIn with Google</button>

                        </form>

                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </section>
    );
};

export default Registration;