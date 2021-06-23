import React, { useState } from 'react';
import { authMethods } from '../firebase/authmethods'
export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)
  const handleSignup = () => {
    const { email, password } = inputs;
    console.log('handleSignup', { email, password });
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
  }
  const handleSignin = () => {
    console.log('handleSignin!!!!')
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log('----------', errors, token);
  }
  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        inputs,
        setInputs,
        errors,
      }}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;