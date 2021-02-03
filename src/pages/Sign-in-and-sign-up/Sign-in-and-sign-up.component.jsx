import React from 'react';
import SignIn from "../Sign-in/Sign-in.component";
import SignUP from "../Sing-Up/sign-up.component";
import "./Sign-in-and-sign-up.styles.scss"


 const SignInandSignOut = () => (
    <div className="sign-in-and-sign-up">
       <SignIn />
       <SignUP />
    </div>
)
export default SignInandSignOut