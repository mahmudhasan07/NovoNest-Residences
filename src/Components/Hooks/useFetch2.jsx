import { useQuery } from "@tanstack/react-query";
import useAxios, { AxiosSecure } from "../Axios/useAxios";


const useFetch2 = (value1, value2, dataValue) => {
    const axiosLink = useAxios(AxiosSecure)
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: [value1, value2, dataValue],
        queryFn: async () => {
            const res = await axiosLink.get(`/${value1}/${value2}?data=${dataValue}`)
            return res.data
        }

    })
    if (isPending) {
        return 'loading...'
    }

    if (isError) {
        return `An Error is + ${error.message}`
    }
    return [data, refetch]
};

export default useFetch2;