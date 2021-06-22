import React, { useContext } from 'react';
import { firebaseAuth } from '../provider/AuthProvider'

const Signup = () => {
  const { handleSignup } = useContext(firebaseAuth);
  console.log(handleSignup)
  return (
    <div>
      Signup
    </div>
  );
};

export default Signup;