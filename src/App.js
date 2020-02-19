import React from 'react';
import './App.css';
// import { getDeliveries, getDeliverer} from './lib/apiService';
// import DeliveryPage from './components/DeliveryPage';
import HistoryPage from './components/HistoryPage';
import DashboardPage from './components/DashboardPage';
import SignupPage from './components/SignupPage';
import LoginPage from  './components/LoginPage';
import { Route, Link} from "react-router-dom";
// import  ProtectedRoute from './components/ProtectedRoute'
// import { login, getProfile, signUp } from './lib/apiService'
// import authService from './services/authService';


function App(props) {


  

  return (
    <div className="App">
      <Link to='/history'>History</Link>
      <Link to='/'>Dashboar</Link>
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
      <main>

        <Route path="/history" exact={true} render={(props) => {
            return (
              <span>
                <HistoryPage />
              </span>
            );
          }} />
          <Route path="/signup" exact={true} render={(props) => {
            return (
              <span>
                <SignupPage />
              </span>
            );
          }} />

          <Route path="/login" exact={true} render={(props) => {
              return (
                <span>
                  <LoginPage />
                </span>
              );
          }} />
          </main>
    </div>
  );
}

export default App;
