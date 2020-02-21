import React, { useState, useEffect } from 'react';
import './App.css';
// import { getDeliveries, getDeliverer} from './lib/apiService';
// import DeliveryPage from './components/DeliveryPage';
import HistoryPage from './components/HistoryPage';
import DashboardPage from './components/DashboardPage';
import SignupPage from './components/SignupPage';
import LoginPage from  './components/LoginPage';
import { Route, Link} from "react-router-dom";
import  ProtectedRoute from './components/ProtectedRoute';
 import { login, getProfile, signUp } from './lib/apiService';
 import authService from './lib/authService';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      deliverer: {}
    }
  }


  // async componentDidMount() {
  //   try{
  //     const fetchUser = await getProfile()

  //     this.setState(state => {
  //       return {
  //         isSignedIn: authService.isAuthenticated(),
  //         deliverere: fetchUser
  //       }

  //     })

  //   } catch(e) {
  //     throw e
  //   }
  // };



// loginDeliverer = async (credentials) => {
//   try {
//     const deliverer = await login(credentials)

//     this.setState(state => {
//       return {
//         isSignedIn: true,
//         deliverer:  deliverer
//       }
//     })
//   }
//   catch (e) {
//     throw e
//   }
// }


signOutDeliverere = () => {
  authService.signOut()

  this.setState(state => {
    return {
      isSignedIn: false,
      deliverer: {}
    }
  })
}

render() {
  const { deliverer } = this.state;

  return (
    <div className="App">
        {authService.isAuthenticated()}
        <nav>
          {authService.isAuthenticated() && <Link to='/'>Dashboard</Link>}
          {authService.isAuthenticated() && <Link to="/deliveries-history">HISTORY</Link>}
          {!authService.isAuthenticated() ?  <Link to="/login">SIGN IN</Link> :
          <button onClick= {this.signOutDeliverere}>SIGN OUT</button>
          }

          {
              !authService.isAuthenticated() ? (
                <Link to="/signup">REGISTER</Link>
              ) : (
               null
              )
            }
            
        </nav>
        <main>


      

          <Route 
            exact={true}
            path="/login"
            render={(props) => <LoginPage  {...props}/* handleLogin={this.loginDeliverer} isSignedIn={isSignedIn}*//>} 
          />
          <Route 
            exact={true}
            path='/signup' 
            render = {(props) => <SignupPage {...props} /*handleSignup={this.signUpDeliverer}*/ /*isSignedIn={isSignedIn}*/ />}
          />
          <ProtectedRoute 
            exact={true}
            path='/'
            deliverer={deliverer} 
            component={DashboardPage}
          />

          <ProtectedRoute 
            exact={true}
            path='/deliveries-history'
            deliverer={deliverer} 
            component={HistoryPage}
          />
        </main>
      </div>
  );

}



}


// function App(props) {

//   return (
//     <div className="App">
//       <Link to='/history'>History</Link>
//       <Link to='/'>Dashboar</Link>
//       {/* <History /> */}
//       {/* <h1>Deliveries</h1>
//       {deliveries.map(delivery => {
//       return (
//         <div>
//           <Delivery delivery={delivery} />
//         </div>

//       );
      
//       })} */}

      

//       <Route path="/" exact={true} render={(props) => {
//           return (
//              <DashboardPage />
//           );
//       }} />
//       <main>

//         <Route path="/history" exact={true} render={(props) => {
//             return (
//               <span>
//                 <HistoryPage />
//               </span>
//             );
//           }} />
//           <Route path="/signup" exact={true} render={(props) => {
//             return (
//               <span>
//                 <SignupPage />
//               </span>
//             );
//           }} />

//           <Route path="/login" exact={true} render={(props) => {
//               return (
//                 <span>
//                   <LoginPage />
//                 </span>
//               );
//           }} />
//           </main>
//     </div>
//   );
// }

export default App;
