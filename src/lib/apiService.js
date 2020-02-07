import axios from 'axios'

const BASE_URL = "http://localhost:3000";

const axiosClient = axios.create({
    baseURL: BASE_URL,
})

console.log(BASE_URL)

export const createDelivery = async (data) => {
    try {
        let delivererId = localStorage.getItem('delivererId')
        const response = await axiosClient.post(`/create-delivery/${delivererId}`, data);
        const {user} = response.data;
        console.log(user)
        return user
       
    } catch(e) {
        throw e
    }
};


export const getDeliveries = async () => {
    try {
        const response = await axiosClient.get('/deliveries');
        return response.data;
       
    } catch(e) {
        throw e
    }
}