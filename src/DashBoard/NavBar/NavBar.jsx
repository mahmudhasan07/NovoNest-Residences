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
    const { user, loading } = useContext(Context)
    return (
        <section>
            <div className='bg-blue-600 h-screen'>
                <div className='  '>
                    <div className='pt-10 text-xl font-semibold flex flex-col justify-center text-center '>
                        {
                            (dataAdmin?.role == "admin") ?
                                <AdminNav></AdminNav>
                                // <AdminNav></AdminNav>
                                :
                                (dataMember?.role == "member") ?
                                    <MembersNav></MembersNav>
                                    :
                                    <UserNav></UserNav>
                        }
                        <NavLink to={`/`}>Home</NavLink>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default NavBar;