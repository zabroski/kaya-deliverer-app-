import React,{useState, useEffect} from 'react';
import {confirmPickup,confirmDropOff, acceptedDelivery} from '../../lib/apiService';

function Delivery(props) {
    
    var {
        delivery,
        onStatusUpdated
    } = props;

    // let delivery = props.delivery;
    let [status, setStatus] = useState([]);

    useEffect(() => {
        setStatus(delivery.status);
    }, [delivery]); // line 6

    return (
        <div>
             <h3>{delivery.id}</h3>
             <h4 className="status">
                 {delivery.status}
             </h4>

            {delivery.merchant && 
            <>
                {delivery.merchant.lastName}
                {/* {delivery.merchant.firstName} */}
            </>}



            {delivery.addresses.map((address) => {
                return (
                <ul className="address">
                    <li>{address.type}</li>
                    <li>{address.street}</li>
                    <li>{address.zipCode}</li>
                    <li>{address.country}</li>
                    <li>{address.city}</li>
                </ul>
                )

            })}
            {status === "" && <button onClick={async () => {
                await confirmPickup(delivery.id);
                setStatus("in transit");
            }}>Pickup</button>}

            {status === "in transit" && 
            <button onClick={async () => {
                await confirmDropOff(delivery.id);
                setStatus("done");
            }}>Complet trip</button>}

            {status === "new" &&
            <button onClick={async () => {
                await acceptedDelivery (delivery.id);
                onStatusUpdated(true);
                setStatus('accepted')
            }}>accpeted</button>}

            {status === "accepted" &&
            <button onClick={async () => {
                await confirmPickup(delivery.id);
                setStatus('in trasit')
            }}>Pickup</button>}
        </div>
 )
}

export default Delivery;