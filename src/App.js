import React, { useState, useEffect } from 'react';
import './App.css';
import { getDeliveries, confirmPickupAddress, getDeliverer} from './lib/apiService';

const handleGetDeliveries = async (setDeliveries) => {
  const deliveries = await getDeliveries();
  console.log(deliveries);
  setDeliveries(deliveries);
}

// const handleGetAddress = async (setAddresses) => {
//   const addresses = await confirmPickupAddress()
//   setAddresses(addresses)
// }

function App() {

  // this.state = {
  //   deliveries: [],
  //      user: {}
  // };

  let [deliveries, setDeliveries] = useState([]);
  // let [ addresses , setAddresses] = useState([])



  // this.setState({
  //   deliveries: []
  // });
  // setDeliveries([]);

  // this.state.deliveries;
  // deliveries

  useEffect(() => {
    handleGetDeliveries(setDeliveries);
  }, []);

  // useEffect(() => {
  //   handleGetAddress(setAddresses);
  // }, []);


  return (
    <div className="App">
      <h1>Deliveries</h1>
      {/* {addresses.map(address => {
        return(
        <h3>{address.country}</h3>
        )
      })} */}

    

      {deliveries.map(delivery => {
      return (

        <>
          <h3>{delivery.id}, {delivery.status}</h3>

          {delivery.merchant&& 
            <>
              {delivery.merchant.lastName},
              {delivery.merchant.firstName},
              {/* {delivery.addresses}, */}
              {/* {delivery.addresses.country}, */}
            </>}

            {delivery.addresses.map((address) => {
              return (
                <ul>
                  <li>{address.type}</li>
                  <li>{address.country}</li>
                </ul>
              )

            })}
        </>
      );
      
      })}
    </div>
  );
}

export default App;
