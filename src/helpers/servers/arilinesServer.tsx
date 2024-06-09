import axios, { AxiosError } from "axios";

export const getAirlinesListFn = async () => {
    try {
        const response = await axios.get(`/api/airlines`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
