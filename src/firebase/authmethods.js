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
  signout: (email, password) => {

  },
}
