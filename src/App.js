import './App.css';
import RegisterForm from './components/RegisterForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ProductForm from './components/ProductForm';
import BrandForm from './components/BrandForm';
import CategoryForm from './components/CategoryForm';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/register">
          <RegisterForm/>
        </Route> */}

        <Route path="/category/create">
          <CategoryForm/>
        </Route>

        <Route path="/brands/create">
          <BrandForm/>
        </Route>

        <Route path="/products/create">
          <ProductForm/>
        </Route>

        <Route path="/register">
          <RegisterForm/>
        </Route>

        <Route path="/login">
          <LoginForm/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>

      </Switch>
     
    </Router>
  );
}

export default App;
