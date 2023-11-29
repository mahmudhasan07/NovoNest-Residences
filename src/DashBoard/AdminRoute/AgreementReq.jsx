import useAxios, { AxiosSecure } from "../../Components/Axios/useAxios";
import useFetch2 from "../../Components/Hooks/useFetch2";


const AgreementReq = () => {

    const [data, refetch] = useFetch2('agreements', 'pending')
    console.log(data);

    return (
        <section>
            <h1 className="text-3xl font-bold text-center mb-5">Agreement Requests</h1>

            {
                data == "l" ?
                    <h1>Loading</h1>
                    :
                    data !== "A" ?
                        data?.map((element, idx) => <ReqPeople key={idx} card={element} id={idx}></ReqPeople>)
                        :
                        <h1>No Data Found</h1>
            }

        </section>
    );
};



const ReqPeople = ({ card, id }) => {
    const axiosLink = useAxios(AxiosSecure)
    const [data, refetch] = useFetch2('agreements', 'pending')
    const email = card?.userEmail
    console.log(email);

    const handleaccept = (id) => {
        console.log(id);
        const currentTime = new Date()
        const date = currentTime.getDate()
        const month = currentTime.getMonth() + 1
        const year = currentTime.getFullYear()
        const updateDate = date + "-" + month + "-" + year
        console.log(updateDate);
        axiosLink.put('/agreements', { id, updateDate })
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })

        axiosLink.put('/users', { email })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const handlereject = (id) => {
        console.log(id);
        axiosLink.delete(`/agreements/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-delay={`${id * 300}`}
            className="border-2 rounded-lg w-full p-2 my-2 text-base border-black flex flex-wrap lg:justify-around">
            <div>
                <h1><span className="font-semibold">Name : </span>{card.userName}</h1>
                <h1><span className="font-semibold">Email : </span>{card.userEmail}</h1>
            </div>
            <div>
                <p><span className="font-semibold">Apartment No : </span>{card.apartmentNo}</p>
                <p><span className="font-semibold">Block : </span>{card.block}</p>
                <p><span className="font-semibold">Floor : </span>{card.floor}</p>
            </div>
            <div>
                <p><span className="font-semibold">Rent : </span>{card.rent}</p>
                <p><span className="font-semibold">Agreement Time : </span>{card.agreementTime}</p>
            </div>
            <div className="flex lg:flex-col justify-between">
                <button onClick={() => handleaccept(card._id)} className="btn btn-sm">Accept</button>
                <button onClick={() => handlereject(card._id)} className="btn btn-sm">Reject</button>
                {/* <button onClick={handletime} className="btn btn-sm">Time</button> */}
            </div>
        </div>
    )
}

export default AgreementReq;