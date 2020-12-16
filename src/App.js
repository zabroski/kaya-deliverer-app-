import React  /*{ useState, useEffect } */from 'react';
import './App.css';
// import { getDeliveries, getDeliverer} from './lib/apiService';
// import DeliveryPage from './components/DeliveryPage';
import HistoryPage from './components/HistoryPage';
import TransitDeliveries from './components/TrasitDeliveries'
import DashboardPage from './components/DashboardPage';
import { Route, Link} from "react-router-dom";

 class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      deliverer: {},
      isMenuOpen: false
    }
  }
  

// openNav = () => {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// closeNav = () => {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
//   document.body.style.backgroundColor = "white";
// }




render() {
  const { deliverer } = this.state;

  return (
    <div className="App">
        
        <nav className="nav-menu">
          { <Link to='/'>Dashboard</Link>}
          {<Link to="/deliveries-history">HISTORY</Link>}
          { <Link to="/transit-deliveries">ANONYM</Link>}
       
{/*      
          <div id="mySidenav" class={`sidenav ${!this.state.isMenuOpen? "sidenavClose": ""}`}>
          <button href="#" class="closebtn" onClick={(e) => {
            e.preventDefault();

            this.setState({
              ...this.state,
              isMenuOpen: !this.state.isMenuOpen
            });
          }}>&times;</button>
          { <Link to='/'>Dashboard</Link>}
          {<Link to="/deliveries-history">HISTORY</Link>}
          {<Link to="/transit-deliveries">TRANSIT</Link>}
          </div> */}
          {/* <button className="open-button" onClick={(e) => {
            e.preventDefault();
            
            this.setState({
              ...this.state,
              isMenuOpen: !this.state.isMenuOpen
            });
          }}>open</button> */}
          <div id="main">...</div> 
        </nav>
        <main className="main-menu">

          <Route
            exact={true}
            path='/'
            deliverer={deliverer} 
            component={DashboardPage}
          />

          <Route
            exact={true}
            path='/deliveries-history'
            deliverer={deliverer} 
            component={HistoryPage}
          />

          <Route 
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
