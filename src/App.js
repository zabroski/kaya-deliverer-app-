import React, { useState, useEffect } from 'react';
import './App.css';
import { getDeliveries, getDeliverer, createDelivery} from './lib/apiService';
import { createDelivery } from './lib/apiService';

const handleGetDeliveries = async (setDeliveries) => {
  const deliveries = await getDeliveries();
  console.log(deliveries);
  setDeliveries(deliveries);
}

const handleGetDeliverer = async (setDeliveries) => {
  const deliverers = await getDeliverer();
  setDeliverer(deliverers);
}




const handleCreateDelivery = async (setCreateDelivery) => {
  const createDeliveries = await createDelivery();
  setCreateDelivery(createDelivery)


}

function App() {

  // this.state = {
  //   deliveries: [],
  //      user: {}
  // };

  let [deliveries, setDeliveries] = useState([]);
  let [deliverers, setDeliverer] = useState([]);
  let [createDeliveries, setCreateDelivery] = useState({});


  // this.setState({
  //   deliveries: []
  // });
  // setDeliveries([]);

  // this.state.deliveries;
  // deliveries

  useEffect(() => {
    handleGetDeliveries(setDeliveries);
  }, []);


  useEffect(() => {
    handleCreateDelivery(setCreateDelivery);
    handleGetDeliverer(setDeliverer)
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
