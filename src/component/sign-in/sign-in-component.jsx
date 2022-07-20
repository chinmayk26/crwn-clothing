import React, {useState} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component'

import './sign-in.style.scss'

const SignIn = ({ emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredientials] = useState({email: '', password: ''})

    const { email, password } = userCredentials;
    const handleSubmit = async event =>{
        event.preventDefault();
        const { emailSignInStart } = this.state;

        emailSignInStart(email, password);
    };

    const handleChange = event =>{
        const {value, name} = event.target;
        console.log(event.target);
        setCredientials({ ...userCredentials ,[name]: value });
    }

        return(
            <div className='sign-in'>
                <h2>Already have an Account</h2>
                <span>Sign with your email and password</span>
                <form onSubmit= {handleSubmit} >
                    <FormInput name ='email' type='email' value={email} label='email' handleChange={handleChange} required/>
                    <FormInput name ='password' type='password' value={password} label='password' handleChange={handleChange} required/> 
                    <div className='buttons'>
                    <CustomButton type='submit'> SIGN IN </CustomButton>
                    <CustomButton  type='button' onClick={googleSignInStart} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>                
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn);