import { NavLink } from "react-router-dom";

const UserNav = () => {
    return (
        <section className="my-auto">
            <div>
                <ul>
                <NavLink to={`/dashboard/my-profile`}><li>My Profile</li></NavLink>
                <NavLink><li>Announcements</li></NavLink>
                </ul>
            </div>
        </section>
    );
};

export default UserNav;