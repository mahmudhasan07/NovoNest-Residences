import React, { useContext } from 'react';
import useAdmin from '../../Components/Hooks/useAdmin';
import { Context } from '../../Components/ContextAPI/ContextAPI';
import MembersNav from './MembersNav';
import AdminNav from './AdminNav';
import UserNav from './UserNav';
import { NavLink } from 'react-router-dom';
import useMember from '../../Components/Hooks/useMember';

const NavBar = () => {
    const [dataAdmin] = useAdmin()
    const [dataMember] = useMember()
    const { user, loading } = useContext(Context)
    return (
        <section>
            <div className=' w-full lg:h-screen'>
                    <div className='pt-10 text-xl w-full font-semibold flex flex-col  justify-center text-center '>
                        {
                            dataAdmin?.role == "admin" ?
                                <AdminNav></AdminNav>
                                :
                                dataMember?.role == "member" ?
                                    <MembersNav></MembersNav>
                                    :
                                    <UserNav></UserNav>
                        }
                        <NavLink to={`/`}>Home</NavLink>
                    </div>
            </div>

        </section>
    );
};

export default NavBar;