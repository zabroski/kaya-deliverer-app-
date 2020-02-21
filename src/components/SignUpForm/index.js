import React, { useState } from 'react';
import { signUp } from '../../lib/apiService';
import {Redirect} from 'react-router'

const handleSubmitForm = async (e, form, setForm, setIsSignedUp) => {
        e.preventDefault()
        const { lastName, firstName, email, password } = form.form;
            
        try {
            await signUp({lastName, firstName, email, password});
            setIsSignedUp(true);
        } catch(e) {

            form["showError"] = true;
            setForm(form);
        }
}
const handleTextInput = (e, form, setForm) => {
    const { name, value } = e.target
    form.form[name] = value;
    setForm({
        form: form.form
    });
}

const SignUpForm = () => {
    
    const [form, setForm] = useState({
        form:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            showError: false
        }
    });

    const [isSignedUp, setIsSignedUp] = useState(false);
    
    if (isSignedUp) {
        return <Redirect to="/login" />
    }else {
        return(
            <div>
                <p className="sign-form-title">Let's start with creating your <br/> account</p>
                <form className = "form" onSubmit={(e) => {
                    handleSubmitForm(e, form, setForm, setIsSignedUp);
                }}>
                    <div>
                        <label>FirstName</label>
                        <input 
                            type="text" 
                            name='firstName'
                            onChange={(e) => {
                                handleTextInput(e, form, setForm);
                            }}
                            value={form.firstName}
                        />
                    </div>
                    <div>
                        <label>LastName</label>
                        <input 
                            type="text" 
                            name='lastName'
                            onChange={(e) => {
                                handleTextInput(e, form, setForm);
                            }}
                            value={form.lastName}
                        />
                    </div>
    
                    <div>
                        <label>Email Address</label>
                        <input 
                        type="text" 
                        name="email"
                        onChange={(e) => {
                            handleTextInput(e, form, setForm);
                        }}
                        value={form.email}/>
                    </div>
    
                    <div>
                        <label>password</label>
                        <input 
                        type="password" 
                        name="password"
                        onChange={(e)=> {
                            handleTextInput(e, form, setForm);
                        }}
                        value={form.password} />
                    </div>
    
                    <button className="sign-up-button">CONTINUE</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;








// class SignUpForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             lastName: '',
//             firstName: '',
//             email: '',
//             password: '',
//             showError: false
//         }
//     }

//     handleSummitForm = async (e) => {
//         e.preventDefault()
//         const { lastName, firstName, email, password } = this.state
//         const  { handleSignUp } = this.props;
//         console.log(this.props);

//         try {

//             await handleSignUp({lastName, firstName, email, password})
//         } catch(e) {
//             this.setState(state => {
//                 return { showError : true}
//             })
//         }
//     }

//     handleTextInput = (e) => {
//         const { name, value } = e.target
//         this.setState(state => {
//             return { [name] : value}
//         })
//     }

//     render() {
//         const { isSignedIn} = this.props
//         if (isSignedIn) {
//             return <Redirect to="/dashboard" />
//         }

//         return(
//             <div>
//                 <h1 className="sign-form-title">Sign up</h1>
//                 <form className = "sign-up-form" onSubmit={this.handleSummitForm}>
                    

//                     <div>
//                         <label>FirstName</label>
//                         <input 
//                         type="text" 
//                         name='firstName'
//                         onChange={this.handleTextInput}
//                         value ={this.state.firstName}/>

//                     </div>
                    
//                     <div>
//                         <label>LastName</label>
//                         <input 
//                         type="text" 
//                         name='lastName'
//                         onChange={this.handleTextInput}
//                         value ={this.state.lastName}/>

//                     </div>

                  
//                     <div>
//                         <label>Email</label>
//                         <input 
//                         type="text" 
//                         name="email"
//                         onChange={this.handleTextInput}
//                         value={this.state.email}/>
//                     </div>
//                     <div>
//                         <label>password</label>
//                         <input 
//                         type="password" name="password"
//                         onChange={this.handleTextInput}
//                         value={this.state.password} />
//                     </div>
//                     <button className="sign-up-button">Sign up</button>
//                 </form>
//             </div>
//         )
//     }
// }


// export default  SignUpForm 