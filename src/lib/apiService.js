import axios from 'axios'

const BASE_URL = process.env.API_URL || "http://localhost:3000";

const JWT_TOKEN = localStorage.getItem('token')
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`

    }
})


export const signUp = async (data) => {

    try {
        console.log('RIGHT HERERRE',data)
        const response = await axiosClient.post('/auth/signup', data)
       
        const { token, deliverer } = response.data
       
        localStorage.setItem('token', token)
        return deliverer
      

    } catch(e) {
        throw e
    }
};


export const login = async (data) => {
    try {
        const response = await axiosClient.post('/auth/login', data)
        const { token, deliverer } = response.data

        await localStorage.setItem('token', token)
        return deliverer

    } catch(e) {
        throw e
    }
}



export const getDeliverer = async (delevererId) => {
    try {
        const response = await axiosClient.get('/deliverers');
        return response.data
    } catch(e){
        throw e
    }
}

export const getDeliveries = async () => {
    try {
        const response = await axiosClient.get('/deliveries');
        return response.data;
       
    } catch(e) {
        throw e
    }
}





export const confirmPickup = async (deliveryId) => {
    try{
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


export const acceptedDelivery = async (deliveryId) => {
    try{
        const response = await axiosClient.post(`/accept-delivery/${deliveryId}`);
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



export const getTransitDeliveries = async () => {
    try {
        const response = await axiosClient.get('/transit-deliveries');
        return response.data;
       
    } catch(e) {
        throw e
    }
}
















