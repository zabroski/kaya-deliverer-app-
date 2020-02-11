import axios from 'axios'

const BASE_URL = process.env.API_URL || "http://localhost:3000";

const axiosClient = axios.create({
    baseURL: BASE_URL,
})

console.log(BASE_URL)

export const getDeliveries = async () => {
    try {
        const response = await axiosClient.get('/deliveries');
        return response.data;
       
    } catch(e) {
        throw e
    }
}

export const createDelivery = async (data) => {
    try {
        let delivererId = localStorage.getItem('delivererId')
        const response = await axiosClient.post(`/create-delivery/${delivererId}`, data);
        return response.data
       
    } catch(e) {
        throw e
    }
};

