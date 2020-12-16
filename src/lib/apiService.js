import axios from 'axios'

const BASE_URL = process.env.API_URL || "http://localhost:3000";

const axiosClient = axios.create({
    baseURL: BASE_URL,
  
})


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

export const acceptedDelivery = async(deliveryId) => {
    try{
        const response = await axiosClient.post(`/accept-delivery/${deliveryId}`)
        return response.data
    }catch(e){
        throw e
    }
}



export const confirmDropOff = async (deliveryId) => {
    try{
        const response = await axiosClient.post(`/confirm-dropoff/${deliveryId}`);
        return response.data

    }catch(e){
        throw e
    }
};



export const getAcceptedDeliveries = async (deliveryId) => {
    try{
        const response = await axiosClient.get("/accepted-deliveries");
        return response.data

    }catch(e){
        throw e
    }
};


export const getNewDeliveries = async (deliveryId) => {
    try{
        const response = await axiosClient.get("/new-deliveries");
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
















