import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


const DashBoard = () => {
    return (
        <section>
            <div className="flex justify-around h-screen">
                <div className="w-1/4 h-auto bg-blue-600 my-auto">
                <NavBar></NavBar>
                </div>
                <div className="w-2/4 h-auto my-10">
                    <Outlet></Outlet>
                </div>
            </div>
            
        </section>
    );
};

export default DashBoard;