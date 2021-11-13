import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Pages/Share/Navigation/Navigation';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Pages/main/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ExploreProduct from './Pages/ExploreProduct/ExploreProduct';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/allProduct">
              <ExploreProduct />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
