/* eslint-disable react-refresh/only-export-components */

import axios from 'axios'
import { useEffect } from 'react';

export const AxiosSecure = axios.create({
    baseURL: 'https://novonest-residences.vercel.app'

})
const useAxios = () => {

    useEffect(() => {
        AxiosSecure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token')
            // console.log('request stopped by interceptors', token)
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });


        AxiosSecure.interceptors.response.use((response) => {
            return response
        },
            (error) => {
                console.log(error);
            }
        )
    }, [])

    return AxiosSecure
};

export default useAxios;