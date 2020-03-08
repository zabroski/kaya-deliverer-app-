import React,{useState, useEffect} from 'react';
import {confirmPickup,confirmDropOff, acceptedDelivery} from '../../lib/apiService';

function Delivery(props) {
    
    var {
        delivery,
        onStatusUpdated,
        // onUpdated
    } = props;

    const [state, setState] = useState({
        delivery: delivery
    });
 
    //null == undefined == 0 == false
    if(false && (1 + 1)){

    }

    return (
        <div>
             <h3>{state.delivery.id}</h3>
             <h4 className="status">
                 {state.delivery.status} {''}
                {state.delivery.merchant && state.delivery.merchant.lastName}
            </h4>
             
            {state.delivery.merchant && 
            <div>
                {/* {state.delivery.merchant.lastName}
                {delivery.merchant.firstName} */}
            </div>}



            {state.delivery.addresses.map((address) => {
                return (
                <ul className="address">
                    <li className="address-type">{address.type}</li>
                    <li>{address.street}</li>
                    <li>{address.zipCode}</li>
                    <li>{address.country}</li>
                    <li>{address.city}</li>
                </ul>
                )

            })}
          

            {state.delivery.status === "new" &&
            <button className="accept-button" onClick={async () => {
                await acceptedDelivery (state.delivery.id);
                state.delivery.status = "picking Up";
                setState({
                    delivery: state.delivery
                });

                onStatusUpdated(state.delivery);
                // onUpdated(state.delivery)

            }}>Accpeted Delivery</button>}

            {state.delivery.status === "picking Up" &&
            <button className="pickUp-button" onClick={async () => {
                await confirmPickup(delivery.id);
                state.delivery.status = "Dropping Off";
                setState({
                    delivery: state.delivery
                });
            }}>Pickup</button>}

            {state.delivery.status === "Dropping Off" && 
            <button className="dropOff-button" onClick={async () => {
                await confirmDropOff(delivery.id);
                state.delivery.status = "done";
                setState({
                    delivery: state.delivery
                });
            }}>Complete Kaya</button>}
        </div>
 )
}

export default Delivery;