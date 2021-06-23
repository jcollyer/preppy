import firebaseconfig from './firebaseIndex'
import firebase from 'firebase'

export const authMethods = {
  signup: (email, password, setErrors, setToken) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async res => {
        const token = await res.user.refreshToken;
        await localStorage.setItem('token', token);
        setToken(window.localStorage.token);
      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]))
      })
  },
  signin: (email, password, setErrors, setToken) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async res => {
        console.log('-------------->>', res)
        const token = await res.user.refreshToken;
        await localStorage.setItem('token', token)
        setToken(window.localStorage.token)
      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]))
      })
  },
  signout: (setErrors, setToken) => {
    // signOut is a no argument function
    firebase.auth().signOut().then(res => {
      //remove the token
      localStorage.removeItem('token')
      //set the token back to original state
      setToken(null)
    })
      .catch(err => {
        //there shouldn't ever be an error from firebase but just in case
        setErrors(prev => ([...prev, err.message]))
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem('token')
        setToken(null)
        console.error(err.message)
      })
  },
}
