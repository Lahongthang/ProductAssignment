import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

type BaseQueryOptions = {
    baseUrl: string;
};
  
type RequestConfig = AxiosRequestConfig & {
    url: string;
};
  
type BaseQueryResponse<T> = {
    data: T;
};

const axiosBaseQuery: any = ({ baseUrl }: BaseQueryOptions) =>
    async ({
        url,
        method,
        data,
        params
    }: RequestConfig): Promise<BaseQueryResponse<any>> => {
    try {
        const result = await axiosInstance({
            baseURL: baseUrl,
            url,
            method,
            data,
            params,
            headers: {
                'Accept': 'application/json',
            },
        });
        return {
            data: result.data,
        };
    } catch (error: any) {
        return error;
    };
};

export default axiosBaseQuery;
