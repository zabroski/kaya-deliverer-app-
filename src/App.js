import React, { useState, useEffect } from 'react';
import './App.css';
import { getDeliveries, getDeliverer} from './lib/apiService';
import Delivery from './components/Delivery';
import History from './components/History';




const handleGetDeliveries = async (setDeliveries) => {
  const deliveries = await getDeliveries();
  console.log(deliveries);
  setDeliveries(deliveries);
}

function App() {

  let [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    handleGetDeliveries(setDeliveries);
  }, []);

  return (
    <div className="App">
      <History />
      {/* <h1>Deliveries</h1>
      {deliveries.map(delivery => {
      return (
        <div>
          <Delivery delivery={delivery} />
        </div>

      );
      
      })} */}

    </div>
  );
}

export default App;
