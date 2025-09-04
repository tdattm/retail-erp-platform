import axios from "axios";

const REST_API_CATEGORY_URL = 'http://localhost:8083/api/category';

export const listCategories = () => {
    return axios.get(REST_API_CATEGORY_URL);
}