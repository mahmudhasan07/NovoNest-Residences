import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const [dataAdmin, isPending] = useAdmin()
    if (loading || isPending) {
        return `loading`
    }
    if (user && dataAdmin) {
        return children
    }
    return <Navigate to={`/login`}></Navigate>
};

export default AdminRoute;