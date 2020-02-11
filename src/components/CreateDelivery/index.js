import React from 'react';
import { Redirect } from 'react-router-dom';
import { createDelivery } from '../../lib/apiService';


class CreateDelivery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            create: false,
            name: ''
        }
    }

    handleChange = (e) => {
        const currentElement = e.target;
        const { name, value } = currentElement;
        const newState = {};
        newState[name] = value;
        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { type , street, zipCode, country, city} = this.state;
        let newDelivery = { type , street, zipCode, country, city};
        createDelivery(newDelivery);
        this.setState({ create: true})
    }

    render() {
        if(this.state.create){return <Redirect to="/"></Redirect>}
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label for = "type">Type</label>
                    <input name="type" type="text"></input>

                    <label for = "street">Street</label>
                    <input name="street" type="text"></input>

                    <label for = "zipCode">ZipCode</label>
                    <input name="zipCode" type="text"></input>

                    <label for = "country">Country</label>
                    <input name="country" type="text"></input>

                    <label for = "city">City</label>
                    <input name="city" type="text"></input>
                    
                </form>

            </div>
        )
    }
}


export default CreateDelivery
