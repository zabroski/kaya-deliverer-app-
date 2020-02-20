// import React from 'react';
import React, { useState } from 'react';
import { login } from '../../lib/apiService';
import {Redirect} from 'react-router'



//     const handleSubmitForm = async (e, form, setForm) => {
//         e.preventDefault()
//         const { email, password } = form

//         try {
//             await login({ email, password})

//         } catch(e) {
//             form["showError"] = true;
//             setForm(form);
//         }
// }
//     const handleTextInput = (e, form, setForm) => {
//     const { name, value } = e.target
//     form.form[name] = value;

//     setForm({
//         form: form.form
//     });
//     }




//     const LoginForm = () => { 
//         const [form, setForm] = useState({
//             form:{
//                 email: '',
//                 password: '',
//                 showError: false
//             }
//         });

//         const { isSignedIn} = this.props
//         const { showError } = this.state

//         let errorMessage;

//         if(showError) {
//             errorMessage = (
//                 <div className="errorMessage">
//                     <span>An error occured, please tryagain</span>
//                 </div>
//             )
//         }
//         if (isSignedIn) {
//             return <Redirect to="/history" />
//         }




//     return( 
//         <div>
//             <h1>Login</h1>
//             { errorMessage}
//             <form className="form" onSubmit={(e) => {
//                  handleSubmitForm(e, form, setForm);

//             }}>
//                 <div>
//                     <label>Email</label>
//                     <input
//                     type="text"
//                     name="email"
//                     onChange={(e) => {
//                         handleTextInput(e, form, setForm);
//                     }}
//                     value={form.email}
//                      />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                     type="password"
//                     name="password"
//                     onChange={(e) => {
//                         handleTextInput(e, form, setForm);
//                     }}
//                     value={form.password} />
//                 </div>
//                 <button>Login</button>
//             </form>
//         </div>
//         )

// }

// export default LoginForm;

class  LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            email: "",
            password: "",
            showError: false
        }
    }

handleSunmitForm = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    const { handleLogin } = this.props


    try {
        await handleLogin({ email, password})
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
        const { isSignedIn} = this.props
        const { showError } = this.state

        let errorMessage

        if(showError) {
            errorMessage = (
                <div className="errorMessage">
                    <span>An error occured, please tryagain</span>
                </div>
            )
        }
        if (isSignedIn) {
            return <Redirect to="/history" />
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