import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { useUserValidation } from './utils/UserValidation';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import AccountInfo from './pages/AccountInfo';
import ProductPage from './pages/ProductPage';
import useAddProductList from './utils/AddProductList';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

function App() {
  useUserValidation();
  useAddProductList();
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/account' exact component={AccountInfo} />
        <Route path='/account/login' exact component={Login} />
        <Route path='/account/register' exact component={Register} />
        <Route path='/cart' exact component={CartPage} />
        <Route path={'/product/:id'} exact component={ProductPage} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/not-found' exact component={NotFound} />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
