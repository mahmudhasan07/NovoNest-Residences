import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


const DashBoard = () => {
    return (
        <section>
            <div className="flex flex-wrap gap-5 h-screen">
                <div className="lg:w-1/5 w-full h-auto bg-blue-600">
                <NavBar></NavBar>
                </div>
                <div className="lg:w-3/4 h-auto my-10">
                    <Outlet></Outlet>
                </div>
            </div>
            
        </section>
    );
};

export default DashBoard;