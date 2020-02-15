import axios from 'axios'

const BASE_URL = process.env.API_URL || "http://localhost:3000";

const JWT_TOKEN = localStorage.getItem('token')
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`

    }
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

export const getDeliverer = async () => {
    try {
        const response = await axiosClient.get('/deliverers');
        return response.data
    } catch(e){
        throw e
    }
}



export const confirmPickup = async (deliveryId) => {
    try{
        // let deliveryId = localStorage.getItem('deliveryId')
        const response = await axiosClient.post(`/confirm-pickup/${deliveryId}`);
        return response.data

    }catch(e){
        throw e
    }
};



export const confirmDropOff = async (deliveryId) => {
    try{
        const response = await axiosClient.post(`/confirm-dropoff/${deliveryId}`);
        return response.data

    }catch(e){
        throw e
    }
};

export const getDeliveriesHistories = async () => {
    try {
        const response = await axiosClient.get('/deliveries-history');
        return response.data;
       
    } catch(e) {
        throw e
    }
}



//authentique


export const login = async (data) => {
    try {
        const response = await axiosClient.post('/auth/login', data)
        const { token, user } = response.data

        localStorage.setItem('token', token)
        return user

    } catch(e) {
        throw e
    }
}



export const signUp = async (data) => {
    try {
        const response = await axiosClient.post('/auth/signup', data)
        const { token, user } = response.data

        localStorage.setItem('token', token)
        return user

    } catch(e) {
        throw e
    }
}








