import React, { useState, useEffect } from 'react';
import './App.css';
import { getDeliveries } from './lib/apiService';

const handleGetDeliveries = async (setDeliveries) => {
  const deliveries = await getDeliveries();
  console.log(deliveries);
  setDeliveries(deliveries);
}

function App() {

  // this.state = {
  //   deliveries: [],
  //      user: {}
  // };

  let [deliveries, setDeliveries] = useState([]);
  // let [user, setUser] = useState({});


  // this.setState({
  //   deliveries: []
  // });
  // setDeliveries([]);

  // this.state.deliveries;
  // deliveries

  useEffect(() => {
    handleGetDeliveries(setDeliveries);
  }, []);



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
              {delivery.merchant.firstName},
              {/* {delivery.deliverer.firstName},
              {delivery.deliverer.lastName}  */}
            </>}
        </>
      );
      
      })}
    </div>
  );
}

export default App;
