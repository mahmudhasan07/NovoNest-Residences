import { useContext } from "react";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../ContextAPI/ContextAPI";


const useAdmin = () => {
    const axiosLink = useAxios(AxiosSecure)
    const {user, loading} = useContext(Context)
    const { isPending, isLoading, isError,error, data: dataAdmin,  refetch } = useQuery({
        queryKey: ['user', user?.email],
        enabled : !loading,
        queryFn: async () => {
            const res = await axiosLink.get(`/users/admin/${user?.email}`)
            return res.data
        }

    })
    // if (isPending) {
    //     return 'loading...'
    // }

    // if (isError) {
    //     return `An Error is + ${error.message}`
    // }
// console.log(dataAdmin);
    return [dataAdmin, isPending]
};

export default useAdmin;