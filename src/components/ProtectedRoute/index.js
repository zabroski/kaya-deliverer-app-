import React from 'react'
import authService from '../../lib/authService'
import { Route, Redirect } from 'react-router-dom'

// function ProtectedRoute ({ component: Component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={(props) => {

//           if(authService.isAuthenticated()){
//             return <Component {...props} {...rest} />;
//           }else{
//             return (
//               <Redirect
//                 to={{ pathname: '/login', state: { from: props.location }}}
//               />
//             );
//           }
//         }}
//       />
//     )
//   }
  





function ProtectedRoute ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authService.isAuthenticated() ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
  
  export default ProtectedRoute