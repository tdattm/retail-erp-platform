import axios from "axios";

export const REST_API_BRAND_URL = 'http://localhost:8083/api/brand';

export const listBrands = () => {
    return axios.get(REST_API_BRAND_URL);
}

export type BrandRequestDto = {
    id: string;
    name: string;
}