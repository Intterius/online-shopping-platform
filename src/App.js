import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/not-found' exact component={NotFound} />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
