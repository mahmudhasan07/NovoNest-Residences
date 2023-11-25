import React, { useContext } from 'react';
import useAdmin from '../../Components/Hooks/useAdmin';
import { Context } from '../../Components/ContextAPI/ContextAPI';
import MembersNav from './MembersNav';
import AdminNav from './AdminNav';
import UserNav from './UserNav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [dataAdmin] = useAdmin()
    const [dataMember] = useAdmin()
    const {user, loading} = useContext(Context)
    return (
        <section>
            <div>
                <div>
                {
                user && dataMember ? <MembersNav></MembersNav>
                :
                user && dataAdmin ? <AdminNav></AdminNav>
                :
                <UserNav></UserNav>
            }
                </div>
                <NavLink to={`/`}>Home</NavLink>
            </div>

        </section>
    );
};

export default NavBar;