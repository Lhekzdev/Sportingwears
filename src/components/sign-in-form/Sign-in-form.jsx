import { useState, useContext } from 'react';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect ,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import {UserContext} from '../../contexts/user.context'
import FormInput from '../form-input/form-input.component';

import Button from '../button/Button';


import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};



const logGoogleUser = async () =>{
 
 
 const {user} =await signInWithGooglePopup();
 await createUserDocumentFromAuth(user);
  // console.log(response)
};
const logGoogleRedirectUser = async () =>{

 const {user} =await  signInWithGoogleRedirect();
  console.log(user);
};


const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const {user} =await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
  };

const {setCurrentUser}= useContext(UserContext)


  const handleSubmit = async (event) => {
    event.preventDefault();



    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
   
   console.log(response)
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };






  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />



        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button onclick={signInWithGoogle}    type='submit'>Google sign in</Button>
          
     
         
         
          
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;