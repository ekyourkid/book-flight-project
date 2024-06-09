import axios, { AxiosError } from "axios";

export const facilitiesFetchFn = async () => {
    try {
        const response = await axios.get(`/api/facilities`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
