import React from 'react';
import { NavLink } from 'react-router-dom';

const MembersNav = () => {
    return (
        <section>
            <div className='bg-yellow-500'>
                <ul>
                    <NavLink>
                        <li>My Profile</li>
                    </NavLink>
                    <NavLink>
                        <li>Make payment</li>
                    </NavLink>
                    <NavLink>
                        <li>Payment History</li>
                    </NavLink>
                    <NavLink>
                        <li>Announcements</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    );
};

export default MembersNav;