import React, { Component } from 'react';
import './Sign-in.styles.scss'
import FormInput from "../../reuse-components/form-input/form-input.component";
import CustomButton from '../../reuse-components/Custom-button/Custom-button.components';
import { signInWithGoogle } from '../../fireBase/fireBase.utils'


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="sign-in ">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email" />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password" />
                    <div className="buttons">
                        <CustomButton type="submit">Sign IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleButton >Sign IN with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn