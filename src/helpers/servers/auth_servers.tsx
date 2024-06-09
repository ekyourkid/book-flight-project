// 'use server'
import axios, { AxiosError } from "axios";

export const loginFn = async (payload: { email: string; password: string }) => {
    try {
        const response = await axios.post("/api/auth/login", payload);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const registerFn = async (payload: {
    name: string;
    email: string;
    password: string;
}) => {
    try {
        const response = await axios.post("/api/auth/register", payload);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const logoutFn = async () => {
    try {
        const response = await axios.post("/api/auth/logout", {});
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
