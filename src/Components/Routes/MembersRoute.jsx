import React, { useContext } from 'react';
import { Context } from '../ContextAPI/ContextAPI';
import useMember from '../Hooks/useMember';
import { Navigate } from 'react-router-dom';

const MembersRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const [dataMember, isPending] = useMember()
    console.log(dataMember);
    if (loading || isPending) {
        return `loading`
    }
    if (user && dataMember) {
        return children
    }
    return <Navigate to={`/login`}></Navigate>
};

export default MembersRoute;