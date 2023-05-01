import {axiosInstance} from "..";

export const getCount = () => {
    const url = 'http://localhost:8080/counter'
    return axiosInstance.post(url)
};