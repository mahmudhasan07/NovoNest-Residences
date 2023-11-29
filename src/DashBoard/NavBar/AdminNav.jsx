import { NavLink } from "react-router-dom";


const AdminNav = () => {
    return (
        <section>
            <div className="">
                <ul className="flex flex-wrap lg:flex-col lg:gap-0 gap-5">
                    <NavLink to={`/dashboard/admin-profile`}>
                        <li className="my-2">Admin Profile</li>
                    </NavLink>
                    <NavLink to={`manage-members`}>
                        <li className="my-2">Manage Members</li>
                    </NavLink>
                    <NavLink to={`make-notice`}>
                        <li className="my-2">Make Announcement</li>
                    </NavLink>
                    <NavLink to={`agreement-request`}>
                        <li className="my-2">Agreement Requests</li>
                    </NavLink>
                    <NavLink to={`manage-coupon`}>
                        <li className="my-2">Manage Coupons</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    );
};

export default AdminNav;