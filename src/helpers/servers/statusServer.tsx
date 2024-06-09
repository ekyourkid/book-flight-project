// 'use server'
import axios, { AxiosError } from "axios";

export const putStatusPayment = async ({
    id,
    payload,
}: {
    id: string;
    payload: {
        statusId: "1" | "2" | "3";
    };
}) => {
    try {
        const response = await axios.put(`/api/status-payment/${id}`, {
            statusId: payload.statusId,
        });
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
