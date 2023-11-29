import { useQuery } from "@tanstack/react-query";
import useAxios, { AxiosSecure } from "../Axios/useAxios";


const useFetch = (value1, value2) => {
    // console.log(value1, value2);
    const axiosLink = useAxios(AxiosSecure)
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: [value1, value2],
        queryFn: async () => {
            const res = await axiosLink.get(`/${value1}?data=${value2}`)
            return res.data
        }

    })
    if (isPending) {
        return 'loading...'
    }

    if (isError) {
        return  `An Error is + ${error.message}`
    }

    return [data, refetch]
};

export default useFetch;