import { useContext } from "react";
import { Context } from "../../Components/ContextAPI/ContextAPI";
import TableSection from "./TableSection";


const MyProfile = () => {
    const {user} = useContext(Context)
    return (
        <section>
            <div className="my-auto">
                <img className="w-44 rounded-full h-40 flex justify-center align-middle" src={user?.photoURL} alt="" />
                <h1 className="text-xl font-bold">{user?.displayName}</h1>
                <h1 className="text-xl">{user?.email}</h1>
            </div>
            <div>
                <h1 className="text-2xl my-5 text-center font-bold">Your Agreement Info</h1>
                <TableSection></TableSection>
            </div>
        </section>
    );
};

export default MyProfile;