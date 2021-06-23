import firebase from 'firebase'

export const authMethods = {
  // firebase helper methods go here... 
  signup: (email, password, setErrors, setToken) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async res => {
        const token = await res.user.refreshToken;
        //set token to localStorage 
        await localStorage.setItem('token', token);
        //grab token from local storage and set to state. 
        setToken(window.localStorage.token);
      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]))
      })
  },
  signin: (email, password) => {

  },
  signout: (email, password) => {

  },
}
