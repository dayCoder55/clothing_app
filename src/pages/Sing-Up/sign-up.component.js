import React from 'react';
import FormInput from '../../reuse-components/form-input/form-input.component'
import CustomInput from '../../reuse-components/Custom-button/Custom-button.components';
import { auth , createUserProfileDocument } from '../../fireBase/fireBase.utils'
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        const { displayName, email,password,confirmPassword } =this.state;
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords dont match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState ( {
                displayName : '',
                email: '',
                password: '',
                confirmPassword:''
            })

        }catch(error){
            console.log("error",error)
        }
    }


    handleChange = event => {
        const { name , value } = event.target;
        this.setState ( {
            [name]:value
        });
    }
    render(){
        const { displayName, email,password,confirmPassword } =this.state;
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span> Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                    type="text"
                    name="name"
                    handleChange={this.handleChange}
                    label="Display name"
                    value={displayName}
                    required
                   />
                     <FormInput
                        name="email"
                        type="email"
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label="Email" />
                    <FormInput 
                    type="password"
                    name="password"
                    handleChange={this.handleChange}
                    label="password"
                    value={password}
                    required
                    />
                    <FormInput 
                    type="confirmPassword"
                    name="confirmPassword"
                    handleChange={this.handleChange}
                    label="confirm Password"
                    value={confirmPassword}
                    required
                    />
                    <CustomInput type="submit">SIGN UP</CustomInput>
                </form>
            </div>
        )
    }
}

export default SignUp