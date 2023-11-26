import React, { useContext } from 'react';
import { Context } from '../ContextAPI/ContextAPI';
import useAdmin from '../Hooks/useAdmin';
import useMember from '../Hooks/useMember';
import { Navigate } from 'react-router-dom';

const MembersRoute = ({children}) => {
    const { user, loading } = useContext(Context)
    const [data, isPending] = useMember()
    if (loading && isPending) {
        return `loading`
    }
    if (user && data) {
        return children
    }
    return <Navigate to={`/login`}></Navigate>
};

export default MembersRoute;