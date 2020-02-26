import React,{useState, useEffect} from 'react';
import { getDeliveries, acceptedDelivery} from '../../lib/apiService';
import Delivery from '../Delivery';

const handleGetNewDeliveries = async (setDeliveries) => {
  return await getDeliveries();
}

const acceptedNewDeliveries = async (setDeliveries) => {
  return await  acceptedDelivery();
}

function DashboardPage () {

    let [newDeliveries, setNewDeliveries] = useState([]);
    let [acceptedDeliveries, setAcceptedDeliveries] = useState([]);

    // useEffect(() => {
    //    const deliveries = handleGetNewDeliveries();
    //    setNewDeliveries(deliveries);
    // }, []);


    useEffect(() => {
      handleGetNewDeliveries( setNewDeliveries);
     
   }, []);



    useEffect(() => {
    acceptedNewDeliveries( setAcceptedDeliveries);
      // setAcceptedDeliveries(deliveries);
   }, []);




    return(
        <div>
            <h1>Deliveries</h1>

            {newDeliveries.map(delivery => {
              return (
                  <div>
                      <Delivery delivery={delivery} />
                  </div>
              );
            })}



        <div>
            <h1>Accepted Deliveries</h1>

            {acceptedDeliveries.map(delivery => {
              return (
                  <div>
                      <Delivery delivery={delivery} />
                  </div>
              );
            })}
        </div>

        </div>

       





    )

    

};


export default DashboardPage;