import React, { useState } from 'react';
import { authMethods } from '../firebase/authmethods'
export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  const handleSignup = () => {
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
  }

  const handleSignin = () => {
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
  }

  const handleSignout = () => {
    console.log('sign out')
    authMethods.signout(setErrors, setToken);
  }
  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        handleSignout,
        inputs,
        token,
        setInputs,
        errors,
      }}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;