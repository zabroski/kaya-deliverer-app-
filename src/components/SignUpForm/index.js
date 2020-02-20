import React, { useState } from 'react';
import { signUp } from '../../lib/apiService';
// import {Redirect} from 'react-router'

const handleSubmitForm = async (e, form, setForm) => {
        e.preventDefault()
        const { lastName, firstName, email, password } = form.form;
        // const  { handleSignUp } = this.props;
        console.log(form);      
     

        try {

            await signUp({lastName, firstName, email, password});
            // await handleSignUp({name, email, password})
        } catch(e) {

            form["showError"] = true;
            setForm(form);
            // this.setState(state => {
            //     return { showError : true}
            // })
        }
}
const handleTextInput = (e, form, setForm) => {
    const { name, value } = e.target
    form.form[name] = value;
    // form[e.target.name] = e.target.value;
    // this.setState(state => {
    //     return { [name] : value}
    // })

    console.log("BLABABABAKBA: ", form);

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

    return(
        <div>
            <h1 className="sign-form-title">Sign up</h1>
            <form className = "form" onSubmit={(e) => {
                handleSubmitForm(e, form, setForm);
            }}>
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
                    <label>Email</label>
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

                <button className="sign-up-button">Sign up</button>
            </form>
        </div>
    );
}

export default SignUpForm;










// class SignUpForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: '',
//             password: '',
//             showError: false
//         }
//     }

//     handleSummitForm = async (e) => {
//         e.preventDefault()
//         const { name, email, password } = this.state
//         const  { handleSignUp } = this.props;
//         console.log(this.props);

//         try {

//             await handleSignUp({name, email, password})
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
//             return <Redirect to="/dashboardPage" />
//         }

//         return(
//             <div>
//                 <h1 className="sign-form-title">Sign up</h1>
//                 <form className = "sign-up-form" onSubmit={this.handleSummitForm}>
//                     <div>
//                         <label>Name</label>
//                         <input 
//                         type="text" 
//                         name='name'
//                         onChange={this.handleTextInput}
//                         value ={this.state.name}/>

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