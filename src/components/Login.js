import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm ] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    //Sign in/ Sign up logic
    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage);
      });
    }
    else{
     // Sign in logic
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage);
  });

    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='h-screen object-cover md:w-screen' src={BG_URL} 
        alt="logo" />
      </div>
      <form
      onSubmit={(e) => e.preventDefault()} 
      className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
         <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
        <input 
        type="text" 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-gray-700'/>
      )}
        <input 
        ref={email}
        type="text" 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button 
        className='my-6 p-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registerted? Sign In Now"}
          </p>
      </form>
    </div>
  )
};

export default Login;