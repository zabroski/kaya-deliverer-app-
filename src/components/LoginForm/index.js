// import React from 'react';
import React, { useState } from 'react';
import { login } from '../../lib/apiService';
import {Redirect} from 'react-router'


class  LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            email: "",
            password: "",
            showError: false,
            isSignedIn: false
        }
    }

    handleSunmitForm = async (e) => {
        e.preventDefault()
        const { email, password } = this.state

        try {
             await login({ email, password})
             //Tell login form that I am signedIn
             this.setState({
                 isSignedIn: true
             });
            //  const [isSignedIn, setIsSignedIn] = useState(true)
        } catch(e) {
            this.setState(state => {
                return { showError: true }
            })

        }
    }

    handleTextInput = (event) => {
        const { name, value }= event.target

        this.setState(state => {
            return { [name] : value}
        })
    }

    render() {
        const { showError } = this.state

        let errorMessage

        if(showError) {
            errorMessage = (
                <div className="errorMessage">
                    <span>An error occured, please tryagain</span>
                </div>
            )
        }
        if (this.state.isSignedIn) {
            window.location.replace("/");
            // return <Redirect 
            // to={{
            //     pathname: "/",
            //     state: { isSignedIn: true }
            //   }}
            // />
        }
        return( 
            <div>
                <h1>Login</h1>
                { errorMessage}
                <form className="form" onSubmit={this.handleSunmitForm}>
                    <div>
                        <label>Email</label>
                        <input
                        type="text"
                        name="email"
                        onChange={this.handleTextInput}
                        value={this.state.email}
                         />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        onChange={this.handleTextInput}
                        value={this.state.password}
                         />
                    </div>
                    <button>Login</button>
                </form>
            </div>
            )
    }

}


export default LoginForm