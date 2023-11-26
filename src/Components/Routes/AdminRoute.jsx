import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router-dom";


const AdminRoute = ({children}) => {
    const { user, loading } = useContext(Context)
    const [data, isPending] = useAdmin()
    if (loading && isPending) {
        return `loading`
    }
    if (user && data) {
        return children
    }
    return <Navigate to={`/login`}></Navigate>
};

export default AdminRoute;