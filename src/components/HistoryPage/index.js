import React,{useState, useEffect} from 'react';
import {getDeliveriesHistories} from '../../lib/apiService';
import Delivery from '../Delivery';



const handleGetDeliveriesHistory = async (setDeliveries) => {
    const deliveries = await getDeliveriesHistories();
    setDeliveries(deliveries);
  }

  function HistoryPage(props) {

    let [deliveries, setDeliveries] = useState([]);
  
    useEffect(() => {
        handleGetDeliveriesHistory(setDeliveries);
    },[])
  
    return (
      <div className="App">
        <h1>My history</h1>
        {deliveries.map(delivery => {
            return <Delivery delivery={delivery} />;
        })}
      </div>
    );
  }

export default HistoryPage;