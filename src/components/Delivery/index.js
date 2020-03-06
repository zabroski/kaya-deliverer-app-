import React,{useState, useEffect} from 'react';
import {confirmPickup,confirmDropOff, acceptedDelivery} from '../../lib/apiService';

function Delivery(props) {
    
    var {
        delivery,
        onStatusUpdated
    } = props;

    const [state, setState] = useState({
        delivery: delivery
    });
    // let delivery = props.delivery;
    // let [status, setStatus] = useState([]);

    // useEffect(() => {
    //     setStatus(delivery.status);
    // }, [delivery]); // line 6

    return (
        <div>
             {/* <h3>{state.delivery.id}</h3> */}
             <h4 className="status">{state.delivery.status} {state.delivery.merchant.lastName}</h4>
             
            {state.delivery.merchant && 
            <div>
                {/* {state.delivery.merchant.lastName} */}
                {/* {delivery.merchant.firstName} */}
            </div>}



            {state.delivery.addresses.map((address) => {
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
            {/* {status === "" && <button onClick={async () => {
                await confirmPickup(delivery.id);
                setStatus("in transit");
            }}>Pickup</button>} */}

           

            {state.delivery.status === "new" &&
            <button onClick={async () => {
                await acceptedDelivery (state.delivery.id);
                state.delivery.status = "picking Up";
                setState({
                    delivery: state.delivery
                });

                onStatusUpdated(state.delivery);

                // setCurrentDelivery(currentDelivery);
               // setStatus('accepted')
            }}>accpeted</button>}

            {state.delivery.status === "picking Up" &&
            <button onClick={async () => {
                await confirmPickup(delivery.id);
                state.delivery.status = "Dropping Off";
                setState({
                    delivery: state.delivery
                });
                // setCurrentDelivery(currentDelivery);
                //setStatus('in transit')
            }}>Pickup</button>}

            {state.delivery.status === "Dropping Off" && 
            <button onClick={async () => {
                await confirmDropOff(delivery.id);
                state.delivery.status = "done";
                setState({
                    delivery: state.delivery
                });
                // setCurrentDelivery(currentDelivery);
                //setStatus("done");
            }}>Drop Off</button>}
        </div>
 )
}

export default Delivery;