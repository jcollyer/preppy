import './App.css';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import { firebaseAuth } from './provider/AuthProvider';

function App() {
  const { token } = useContext(firebaseAuth);
  return (
    <>
      {/* switch allows switching which components render.  */}
      <Switch>
        <Route exact path='/' render={rProps => token === null ? <Signin /> : <Home />} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
