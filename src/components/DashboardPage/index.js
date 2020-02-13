import React,{useState, useEffect} from 'react';
import { getDeliveries} from './lib/apiService';
import Delivery from './components/Delivery';

const handleGetDeliveries = async (setDeliveries) => {
    const deliveries = await getDeliveries();
    console.log(deliveries);
    setDeliveries(deliveries);
  }


function DashboardPage () {

    let [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
      handleGetDeliveries(setDeliveries);
    }, []);

    return(
        <div>
            <h1>Deliveries</h1>
            {deliveries.map(delivery => {
            return (
                <div>
                    <Delivery delivery={delivery} />
                </div>
      );
      })}
        </div>
    )

};


export default DashboardPage;