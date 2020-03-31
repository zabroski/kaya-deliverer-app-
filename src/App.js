import React  /*{ useState, useEffect } */from 'react';
import './App.css';
// import { getDeliveries, getDeliverer} from './lib/apiService';
// import DeliveryPage from './components/DeliveryPage';
import HistoryPage from './components/HistoryPage';
import TransitDeliveries from './components/TrasitDeliveries'
import DashboardPage from './components/DashboardPage';
import SignupPage from './components/SignupPage';
import LoginPage from  './components/LoginPage';
import { Route, Link} from "react-router-dom";
import  ProtectedRoute from './components/ProtectedRoute';
//  import { login, getProfile, signUp } from './lib/apiService';
 import authService from './lib/authService';


 class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      deliverer: {},
      isMenuOpen: false
    }
  }
  

signOutDeliverere = () => {
  authService.signOut()

  this.setState(state => {
    return {
      isSignedIn: false,
      deliverer: {}
    }
  })
}


openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}




render() {
  const { deliverer } = this.state;

  return (
    <div className="App">
        {authService.isAuthenticated()}
        <nav className="nav-menu">
          {/* {authService.isAuthenticated() && <Link to='/'>Dashboard</Link>}
          {authService.isAuthenticated() && <Link to="/deliveries-history">HISTORY</Link>}
          {authService.isAuthenticated() && <Link to="/transit-deliveries">ANONYM</Link>}
          {!authService.isAuthenticated() ?  <Link to="/login">SIGN IN</Link> :
          <button className="signUp-button" onClick= {this.signOutDeliverere}>Sign Out</button>
          }  */}

          {/* {/* {
          !authService.isAuthenticated() ? (
            <Link to="/signup">REGISTER</Link>
          ) : (
            null
          )
          }
            
{/*  */}

          <div id="mySidenav" class={`sidenav ${!this.state.isMenuOpen? "sidenavClose": ""}`}>
          <button href="#" class="closebtn" onClick={(e) => {
            e.preventDefault();

            this.setState({
              ...this.state,
              isMenuOpen: !this.state.isMenuOpen
            });
          }}>&times;</button>
          {authService.isAuthenticated() && <Link to='/'>Dashboard</Link>}
          {authService.isAuthenticated() && <Link to="/deliveries-history">HISTORY</Link>}
          {authService.isAuthenticated() && <Link to="/transit-deliveries">TRANSIT</Link>}
          {!authService.isAuthenticated() ?  <Link to="/login">SIGN IN</Link> :
          <button className="signUp-button" onClick= {this.signOutDeliverere}>Sign Out</button>}

          {!authService.isAuthenticated() ? (<Link to="/signup">REGISTER</Link>) : (null)}
          </div>
          <button className="open-button" onClick={(e) => {
            e.preventDefault();
            
            this.setState({
              ...this.state,
              isMenuOpen: !this.state.isMenuOpen
            });
          }}>open</button>
          <div id="main">...</div> 
        </nav>
        <main className="main-menu">

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

          <ProtectedRoute 
            exact={true}
            path='/transit-deliveries'
            deliverer={deliverer} 
            component={TransitDeliveries}
          />
        </main>
      </div>
    );
  }
}


export default App;
