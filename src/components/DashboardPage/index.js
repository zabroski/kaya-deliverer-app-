import React,{useState, useEffect} from 'react';
import {getNewDeliveries,  getAcceptedDeliveries, acceptedDelivery} from '../../lib/apiService';
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
        <div className="dashboard">
          <div>
            <h1 className="deliveries-title">Deliveries</h1>
            {newDeliveries.map((delivery, key) => {
              return (
                  <div className="deliveries">
                      {/* delivery key is: {key} */}
                      <Delivery delivery={delivery} onStatusUpdated={(deliveryFromDeliveryComponent) => {
                        // const acceptedDelivery = newDeliveries[key];

                        /**
                         * Removed updated delivery from new deliveries since the status was changed to accepted
                         */
                        const tmpNewDeliveries = newDeliveries;
                        tmpNewDeliveries.splice(key, 1);
                        setNewDeliveries([]);
                        setNewDeliveries([...tmpNewDeliveries]);
                        
                        /**
                         * Move the updatedDelivery to accepted deliveries list
                         */
                        // acceptedDeliveries.push(acceptedDelivery);
                        // console.log("broken delivery: ", acceptedDelivery);
                        const tmpAcceptedDeliveries = acceptedDeliveries;
                        setAcceptedDeliveries([]);
                        console.log(" --> ", acceptedDelivery);
                        setAcceptedDeliveries([deliveryFromDeliveryComponent, ...tmpAcceptedDeliveries]);
                      }} />
                  </div>
              );
            })}
          </div>
           
          <div>
              <h1 className="accepted-title">Accepted</h1>

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