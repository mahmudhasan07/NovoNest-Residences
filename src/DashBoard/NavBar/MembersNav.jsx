import React from 'react';
import { NavLink } from 'react-router-dom';

const MembersNav = () => {
    return (
        <section>
            <div className=''>
                <ul>
                    <NavLink to={`/dashboard/my-profile`}>
                        <li>My Profile</li>
                    </NavLink>
                    <NavLink to={`/dashboard/make-payment`}>
                        <li>Make payment</li>
                    </NavLink>
                    <NavLink to={`/dashboard/payment-history`}>
                        <li>Payment History</li>
                    </NavLink>
                    <NavLink to={`/dashboard/announcement`}>
                        <li>Announcements</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    );
};

export default MembersNav;