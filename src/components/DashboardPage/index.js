import React,{useState, useEffect} from 'react';
import { getDeliveries, getNewDelivery, acceptedDelivery} from '../../lib/apiService';
import Delivery from '../Delivery';

const handleGetNewDeliveries = async (setNewDeliveries) => {
  const newDeliveries = await getNewDelivery();
  setNewDeliveries(newDeliveries); 
}


const  handleGetAcceptedDeliveries = async (setNewDeliveries) => {
  const newDeliveries = await acceptedDelivery ();
  setNewDeliveries(newDeliveries); 
}


function DashboardPage () {

    let [newDeliveries, setNewDeliveries] = useState([]);
    let [acceptedDeliveries, setAcceptedDeliveries] = useState([]);

    useEffect(() => {
       handleGetNewDeliveries(setNewDeliveries);
    }, []);



    useEffect(() => {
      handleGetAcceptedDeliveries( setAcceptedDeliveries);
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
            {/* <h1>Accepted Deliveries</h1> */}

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