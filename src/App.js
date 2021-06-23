import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <>
      {/* switch allows switching which components render.  */}
      <Switch>
        {/* route allows you to render by url path */}
        <Route exact path='/' component={Signup} />
        <Route exact path='/signin' component={Signin} />

      </Switch>
    </>
  );
}

export default App;
