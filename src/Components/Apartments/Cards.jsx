import { useContext, useState } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
// } from "@material-tailwind/react";


const Cards = ({ card }) => {
    const [img, setimg] = useState(card.image1)

    const { user } = useContext(Context)
    const axiosLink = useAxios(AxiosSecure)

    const handleagreement = () => {
        const userName = user?.displayName
        const userEmail = user?.email
        const floor = card.floor
        const block = card.block
        const apartmentNo = card.apartmentNo
        const rent = card.rent
        const status = 'pending'
        const agreement = {userName,userEmail,floor,block,apartmentNo,rent,status}
        console.log(agreement);

        axiosLink.post(`/agreements`, agreement)
        .then(res=>{
            console.log("added",res);
            axiosLink.put(`/users`,{userEmail})
            .then(res=>{
                console.log("update",res);
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })


    }
    return (
        <section>
            <div className="card lg:w-96  bg-base-100 h-full flex flex-col border-blue-500 border-2 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Room" className="rounded-xl h-64" />
                </figure>
                <div className="flex gap-2 justify-center">
                    <img onClick={() => setimg(card.image2)} className="w-20 h-16 my-5 rounded-lg" src={card.image2} alt="" />
                    <img onClick={() => setimg(card.image3)} className="w-20 h-16 my-5 rounded-lg" src={card.image3} alt="" />
                    <img onClick={() => setimg(card.image4)} className="w-20 h-16 my-5 rounded-lg" src={card.image4} alt="" />

                </div>
                <div className="card-body p-0  flex-grow items-center text-center">
                    <h2 className="card-title">Apartment Number: {card?.apartmentNo}</h2>
                    {/* <p>{id+1}</p> */}
                    <p>Floor: <span>{card?.floor}</span></p>
                    <p>Block: <span>{card?.block}</span></p>
                    <p>Rent: <span>{card?.rent}</span></p>
                </div>
                <div className="card-actions  py-2 flex mx-auto">
                    <button onClick={handleagreement} className="btn btn-primary">Agreement</button>
                </div>
            </div>


            {/* <Card className="mt-6 w-80 border-2">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={img}
                        alt="card-image"
                        className="h-64 w-full"
                    />
                </CardHeader>
                <div className="flex gap-2 justify-center">
                    <img onClick={() => setimg(card.image2)} className="w-20 h-16 my-5 rounded-lg" src={card.image2} alt="" />
                    <img onClick={() => setimg(card.image3)} className="w-20 h-16 my-5 rounded-lg" src={card.image3} alt="" />
                    <img onClick={() => setimg(card.image4)} className="w-20 h-16 my-5 rounded-lg" src={card.image4} alt="" />

                </div>
                <CardBody>
                    <Typography variant="p" color="blue-gray" className="mb-2 text-center">
                        
                            <h2 className="card-title">Apartment Number: {card?.apartmentNo}</h2>
                            <p><span className="font-semibold">Floor:</span> <span className="text-gray-700">{card?.floor}</span></p>
                            <p><span className="font-semibold">Block:</span> <span className="text-gray-700">{card?.block}</span></p>
                            <p><span className="font-semibold">Rent:</span> <span className="text-gray-700">{card?.rent}</span>Taka</p>
                    </Typography>

                </CardBody>
                <CardFooter className="pt-0 mx-auto">
                    
                        <Button className="btn bg-blue-700">Agreement</Button>
                </CardFooter>
            </Card> */}
        </section>
    );
};

export default Cards;