import React,{useState, useEffect} from 'react';
import {getDeliveriesHistories} from '../../lib/apiService';
import Delivery from '../Delivery';



const TransitDeliveries = async (setDeliveries) => {
    const deliveries = await getDeliveriesHistories();
    setDeliveries(deliveries);
  }

  function TransitDeliveriesPage(props) {

    let [deliveries, setDeliveries] = useState([]);
  
    useEffect(() => {
        TransitDeliveries(setDeliveries);
    },[])
  
    return (
      <div className="App">
        <h1>anonym</h1>
        {deliveries.map(delivery => {
            return <Delivery delivery={delivery} />;
        })}
      </div>
    );
  }

export default TransitDeliveriesPage;