import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import login from '../../../public/Login.json'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Login = () => {
    const axiosLink = useAxios(AxiosSecure)
    const { logUser, googleUser } = useContext(Context)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const email = data.email
        const password = data.password
        console.log(email, password);
        logUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Log-In Successful",
                    text: "Login Successfully Complete",
                    icon: "success"
                });
                navigate('/')


            })
            .catch(error => {
                toast.error('Please check your email and password again', {
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
    }

    const handlegoogle = () => {
        googleUser()
            .then(res => {
                const name = res.user.displayName
                const email = res.user.email
                const photo = res.user.photoURL
                const user_info = { name, email, photo }
                axiosLink.post(`/users`, user_info)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.message);
                    })

                    navigate('/')
            })
    }
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <Lottie animationData={login}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full h-fit border-2 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body my-auto" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-3xl font-bold text-center">Login Here</h1>
                            <hr className="border-2 rounded-xl" />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="border-2 p-1  rounded-xl border-black" {...register("email")} type="email" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className="border-2 p-1 rounded-xl border-black" {...register("password")} type="password" />

                            </div>
                            <NavLink to={`/registration`} className={`flex justify-end text-lg font-semibold `}>New User???</NavLink>

                            <input className="btn" type="submit" />
                            <div className="divider">OR</div>
                            <button onClick={handlegoogle} className="btn"><FcGoogle></FcGoogle> LogIn with Google</button>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </section>
    );
};

export default Login;