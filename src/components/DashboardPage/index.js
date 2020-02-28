import React,{useState, useEffect} from 'react';
import {getNewDeliveries,  getAcceptedDeliveries} from '../../lib/apiService';
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
            <h1>Deliveries</h1>
            {newDeliveries.map((delivery, key) => {
              return (
                  <div className="deliveries">
                      delivery key is: {key}
                      <Delivery delivery={delivery} onStatusUpdated={() => {
                        const acceptedDelivery = newDeliveries[key];
                        newDeliveries.splice(key, 1);
                        
                        setNewDeliveries([...newDeliveries]);
                        
                        acceptedDeliveries.push(acceptedDelivery);
                        console.log("broken delivery: ", acceptedDelivery);
                        setAcceptedDeliveries([acceptedDelivery, ...acceptedDeliveries]);
                      }} />
                  </div>
              );
            })}
          </div>
           
          <div>
              <h1>Accepted</h1>

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