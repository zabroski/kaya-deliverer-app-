import React, { useState } from 'react';
import './App.css';
import { getDeliveries } from './lib/apiService';

const handleGetDeliveries = async (setDeliveries) => {
  const deliveries = await getDeliveries();
  console.log(deliveries);
  setDeliveries(deliveries);
}

function App() {

  let [deliveries, setDeliveries] = useState([]);

  handleGetDeliveries(setDeliveries);




  
  // let [deliverers, setDeliverers] = useState([]);

  // fetch('http://localhost:3000/deliverers').then((response) => {
  //   return response.json();
  // }).then((deliverersFromApi) => {
  //   setDeliverers(deliverersFromApi);
  //   //deliverers = data;
  // });



  // fetch('http://localhost:3000/deliveries').then((response) => {
  //   return response.json();
  // }).then((deliveriesFromApi) => {
  //   setDeliverers(deliveriesFromApi);
  // });
  return (
    <div className="App">
      <h1>Available deliverers</h1>
      {deliveries.map(deliverer => {
        return <h2>{deliverer.lastName}, {deliverer.firstName}</h2>
      })}
    </div>
  );
}

export default App;
