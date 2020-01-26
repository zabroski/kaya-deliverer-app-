import React, { useState } from 'react';
import './App.css';

function App() {

  let [deliverers, setDeliverers] = useState([]);

  fetch('http://localhost:3000/deliverers').then((response) => {
    return response.json();
  }).then((deliverersFromApi) => {
    setDeliverers(deliverersFromApi);
    //deliverers = data;
  });

    // deliverers.push({
    //     id:2,
    //     lastName:'Toto',
    //     firstName: 'Tata',
    //     phonenumber:'333-333-3333'
    // });

    // deliverers.push({
    //     id:4,
    //     lastName:'maman',
    //     firstName: 'mom',
    //     phonenumber:'333-333-3333',
    // });

  
  return (
    <div className="App">
      <h1>Available deliverers</h1>
      {deliverers.map(deliverer => {
        return <h2>{deliverer.lastName}, {deliverer.firstName}</h2>
      })}
    </div>
  );
}

export default App;
