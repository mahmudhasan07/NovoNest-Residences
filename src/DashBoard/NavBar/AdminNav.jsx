import { NavLink } from "react-router-dom";


const AdminNav = () => {
    return (
        <section>
            <div className="bg-green-600">
                <ul>
                    <NavLink>
                        <li>Admin Profile</li>
                    </NavLink>
                    <NavLink>
                        <li>Manage Members</li>
                    </NavLink>
                    <NavLink>
                        <li>Make Announcement</li>
                    </NavLink>
                    <NavLink>
                        <li>Agreement Requests</li>
                    </NavLink>
                    <NavLink>
                        <li>Manage Coupons</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    );
};

export default AdminNav;