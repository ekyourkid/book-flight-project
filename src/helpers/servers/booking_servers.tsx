// 'use server'
import axios, { AxiosError } from "axios";

export const ticketFlightFn = async () => {
    try {
        const response = await axios.get(`/api/ticket-booking`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const bookingFlightFn = async ({
    id,
    payload,
}: {
    id: string;
    payload: {
        title1: string;
        fullname1: string;
        nationality1: string;
        title2: string;
        fullname2: string;
        nationality2: string;
        email?: string;
        phone?: string;
    };
}) => {
    try {
        const response = await axios.post(`/api/booking/${id}`, payload);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
