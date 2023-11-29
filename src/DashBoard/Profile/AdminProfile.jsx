import { useContext } from "react";
import { Context } from "../../Components/ContextAPI/ContextAPI";
import useFetch from "../../Components/Hooks/useFetch";
import Piechart from "./PieChart";
import useFetch2 from "../../Components/Hooks/useFetch2";


const AdminProfile = () => {
    const { user } = useContext(Context)
    const [data] = useFetch('apartments')
    const [data1] = useFetch('users')
    const [data2] = useFetch2('users','members')
    console.log(data1,data2);
    return (
        <section>
            <div>
                <div className="my-auto">
                    <img className="w-44 rounded-full h-40 flex justify-center align-middle" src={user?.photoURL} alt="" />
                    <h1 className="text-xl font-bold">{user?.displayName}</h1>
                    <h1 className="text-xl">{user?.email}</h1>
                </div>
            </div>
            <div className="my-2 text-lg">
                <h1><span className="font-semibold">Total Number Of Rooms : </span>{data?.length}</h1>
            </div>
            <div>
                <Piechart></Piechart>
            </div>
            <div>
                
            </div>
            <div className="my-2 text-lg">
                <h1><span className="font-semibold">Number of users in the database : </span>{data1?.length}</h1>
            </div>
            <div className="my-2 text-lg">
                <h1><span className="font-semibold">Number of members in the database : </span>{data2?.length}</h1>
            </div>
        </section>
    );
};

export default AdminProfile;