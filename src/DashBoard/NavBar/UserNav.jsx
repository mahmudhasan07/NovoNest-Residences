import { NavLink } from "react-router-dom";

const UserNav = () => {
    return (
        <section className="bg-red-500">
            <div>
                <NavLink><li>My Profile</li></NavLink>
                <NavLink><li>Announcements</li></NavLink>
            </div>
        </section>
    );
};

export default UserNav;