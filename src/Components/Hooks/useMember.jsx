import { useContext } from "react";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../ContextAPI/ContextAPI";


const useMember = () => {
    const axiosLink = useAxios(AxiosSecure)
    const {user,loading} = useContext(Context)
    const { isPending, isError, data: dataMember, error, refetch } = useQuery({
        queryKey: ['member', user?.email],
        enabled : !loading,
        queryFn: async () => {
            const res = await axiosLink.get(`/users/members/${user?.email}`)
            return res.data
        }

    })
    // if (isPending) {
    //     return 'loading...'
    // }

    // if (isError) {
    //     return `An Error is + ${error.message}`
    // }

    return [dataMember, refetch, isPending]
};

export default useMember;