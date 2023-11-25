import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    if (loading) {
        return `loading`
    }
    if (user) {
        return children
    }
    return <Navigate to={`/login`}></Navigate>
};

export default PrivetRoute;