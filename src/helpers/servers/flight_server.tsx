import axios, { AxiosError } from "axios";
type TParams = {
    limit: number;
    page: number;
    sort: string;
    filter: any;
};
export const fetchFlightFn = async (params: TParams) => {
    const queryString = `facilities=${params.filter.facilities.join()}&airlineId=${params.filter.airlineId.join()}&minPrice=${
        params.filter.minPrice
    }&maxPrice=${params.filter.maxPrice}`;

    try {
        const response = await axios.get(`/api/flights?${queryString}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const fetchtFlightDetailFn = async (flightId: string) => {
    try {
        const response = await axios.get(`/api/flights/${flightId}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
