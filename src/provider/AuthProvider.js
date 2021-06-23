import React, { useState } from 'react';
import { authMethods } from '../firebase/authmethods'

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)
  const handleSignup = () => {
    // middle man between firebase and signup 

    // calling signup from firebase server
    const { email, password } = inputs;
    console.log('handleSignup', { email, password });
    authMethods.signup(inputs.email, inputs.password, setErrors);
    // console.log('---------', errors);
  }
  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        inputs,
        setInputs,
        errors,
      }}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export const firebaseAuth = React.createContext();
export default AuthProvider;