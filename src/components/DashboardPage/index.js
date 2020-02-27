import React,{useState, useEffect} from 'react';
import { getDeliveries, getNewDeliveries,  getAcceptedDeliveries} from '../../lib/apiService';
import Delivery from '../Delivery';

const handleGetNewDeliveries = async (setNewDeliveries) => {
  const newDeliveries = await getNewDeliveries();
  setNewDeliveries(newDeliveries); 
}


const  handleGetAcceptedDeliveries = async (setNewDeliveries) => {
  const newDeliveries = await  getAcceptedDeliveries ();
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
        <div className="">
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