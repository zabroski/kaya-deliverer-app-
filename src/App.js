import React, { useState, useEffect } from 'react';
import './App.css';
import { getDeliveries, getDeliverer} from './lib/apiService';
import Delivery from './components/Delivery';
import HistoryPage from './components/HistoryPage';
import DashboardPage from './components/DashboardPage'
import { Route, Link} from "react-router-dom";




// const handleGetDeliveries = async (setDeliveries) => {
//   const deliveries = await getDeliveries();
//   console.log(deliveries);
//   setDeliveries(deliveries);
// }

function App() {

  

  return (
    <div className="App">
      <Link to='/history'>History</Link>
      {/* <History /> */}
      {/* <h1>Deliveries</h1>
      {deliveries.map(delivery => {
      return (
        <div>
          <Delivery delivery={delivery} />
        </div>

      );
      
      })} */}

      <Route path="/" exact={true} render={(props) => {
          return (
             <DashboardPage />
          );
      }} />
        

      <Route path="/history" exact={true} render={(props) => {
          return (
            <span>
              <HistoryPage />
            </span>
          );
        }} />

    </div>
  );
}

export default App;
