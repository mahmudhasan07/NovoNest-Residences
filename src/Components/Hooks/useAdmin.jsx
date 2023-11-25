import { useContext } from "react";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../ContextAPI/ContextAPI";


const useAdmin = () => {
    const axiosLink = useAxios(AxiosSecure)
    const {user, loading} = useContext(Context)
    const { isPending, isError, data: dataAdmin, error, refetch } = useQuery({
        queryKey: ['user', user?.email],
        enabled : !loading,
        queryFn: async () => {
            const res = await axiosLink.get(`/users/admin/${user?.email}`)
            return res.data
        }

    })
    if (isPending) {
        return 'loading...'
    }

    if (isError) {
        return `An Error is + ${error.message}`
    }

    return [dataAdmin, refetch, isPending]
};

export default useAdmin;