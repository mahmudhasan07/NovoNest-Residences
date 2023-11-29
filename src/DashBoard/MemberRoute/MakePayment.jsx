import React, { useContext } from "react";
import useFetch2 from "../../Components/Hooks/useFetch2";
import { Context } from "../../Components/ContextAPI/ContextAPI";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios, { AxiosSecure } from "../../Components/Axios/useAxios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const MakePayment = () => {
    const { user } = useContext(Context)
    const email = user?.email
    const axiosLink = useAxios(AxiosSecure)
    const [data] = useFetch2('agreements', "complete", email)
    const navigate = useNavigate()
    console.log(data);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        axiosLink.post(`/payment`, data)
            .then(res => {
                console.log(res.data.insertedId);
                navigate(`${res.data.insertedId}`)
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    // const handlepay = () => {
    // }

    return (
        <section>
            <h1 className="text-3xl text-center font-bold lg:mb-10 mb-5">Make Payment of Your Apartment</h1>
            <div className=" space-y-5">
                {
                    data == "l" ?
                        <h1>loading</h1>
                        :
                        data?.map((element, idx) =>
                            <div data-aos="fade-down"
                            // data-aos-offset="500"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay={`${idx * 400}`} className="border-2 p-2 rounded-xl border-black flex flex-wrap justify-around" key={idx}>
                                <h1><span className="font-semibold">Name : </span>{element?.userName}</h1>
                                <h1><span className="font-semibold">Flat Number: </span>{element?.apartmentNo}</h1>
                                <h1><span className="font-semibold">Block : </span>{element?.block}</h1>
                                <h1><span className="font-semibold">Rent : </span>{element.rent}</h1>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                                <div>
                                    <button className="btn btn-sm" onClick={handleOpen}>Pay</button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Input Your Info
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="flex justify-around">
                                                        <div>
                                                            <label>User Email</label><br />
                                                            <input readOnly defaultValue={element?.userEmail} className="border-2 p-1 rounded-xl border-black" {...register("email")} />
                                                        </div>
                                                        <div>
                                                            <label>Floor</label><br />
                                                            <input readOnly defaultValue={element?.floor} className="border-2 p-1 rounded-xl border-black" {...register("floor")} />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-around">
                                                        <div>
                                                            <label>Block</label><br />
                                                            <input readOnly defaultValue={element?.block} className="border-2 p-1 rounded-xl border-black" {...register("block")} />
                                                        </div>
                                                        <div>
                                                            <label>Apartment Number</label><br />
                                                            <input readOnly defaultValue={element?.apartmentNo} className="border-2 p-1 rounded-xl border-black" {...register("apartmentNo")} />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-around">
                                                        <div>
                                                            <label>Rent</label><br />
                                                            <input readOnly defaultValue={element?.rent} className="border-2 p-1 rounded-xl border-black"{...register("rent")} />
                                                        </div>
                                                        <div>
                                                            <label>Month</label><br />
                                                            <select className="border-2 p-1 rounded-xl border-black" placeholder="Enter Month" {...register("rentMonth")} >
                                                                <option value="">Choose Your Month</option>
                                                                <option value="january">January</option>
                                                                <option value="february">February</option>
                                                                <option value="march">March</option>
                                                                <option value="april">April</option>
                                                                <option value="may">May</option>
                                                                <option value="june">June</option>
                                                                <option value="july">July</option>
                                                                <option value="august">August</option>
                                                                <option value="september">September</option>
                                                                <option value="october">October</option>
                                                                <option value="november">November</option>
                                                                <option value="december">December</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <input type="submit" className="btn" />
                                                    </div>
                                                </form>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>


                            </div>
                        )
                }
            </div>

        </section>
    );
};

export default MakePayment;