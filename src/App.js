import React, { useState, useEffect } from 'react';
import './App.css';
import { getDeliveries, confirmPickup,confirmDropOff, getDeliverer} from './lib/apiService';

const handleGetDeliveries = async (setDeliveries) => {
  const deliveries = await getDeliveries();
  console.log(deliveries);
  setDeliveries(deliveries);
}


// const handleConfirmPickUp = async (setPickUp) => {
//   const pickUp = await confirmPickup();
//   setPickUp(pickUp)
// }



function App() {

  // this.state = {
  //   deliveries: [],
  //      user: {}
  // };

  let [deliveries, setDeliveries] = useState([]);
  // let [pickUp, setPickUp ] = useState([])

  useEffect(() => {
    handleGetDeliveries(setDeliveries);
  }, []);

  // useEffect(() => {
  //   handleConfirmPickUp(setPickUp);
  // }, []);

  return (
    <div className="App">
      <h1>Deliveries</h1>
      {deliveries.map(delivery => {
      return (

        <>
          <h3>{delivery.id}, {delivery.status}</h3>

          {delivery.merchant&& 
            <>
              {delivery.merchant.lastName},
              {delivery.merchant.firstName}
            </>}

            {delivery.addresses.map((address) => {
              return (
                <ul>
                  <li>{address.type}</li>
                  <li>{address.street}</li>
                  <li>{address.zipCode}</li>
                  <li>{address.country}</li>
                  <li>{address.city}</li>
                </ul>
              )

            })}
            <button onClick={async () => {
              await confirmPickup(delivery.id);
            }}>Accept</button>

            <button onClick={async () => {
              await confirmDropOff(delivery.id);
            }}>Complet delivery</button>
        </>
      );
      
      })}
    </div>
  );
}

export default App;
