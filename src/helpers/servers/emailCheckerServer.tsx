import axios, { AxiosError } from "axios";

export const postEmailChecker = async (email: string) => {
    try {
        const response = await axios.post("/api/auth/email-checker", {
            email,
        });
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
