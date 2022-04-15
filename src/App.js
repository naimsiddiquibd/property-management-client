import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AccountDetails from './Pages/AccountDetails/AccountDetails';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Listings from './Pages/Listings/Listings';
import CreateListing from './Pages/CreateListing/CreateListing';
import SingleListing from './Pages/SingleListing/SingleListing';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyProfile from './Pages/MyProfile/MyProfile';
import UpdateAccountDetails from './Pages/UpdateAccountDetails/UpdateAccountDetails';



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/AccountDetails">
            <AccountDetails></AccountDetails>
          </PrivateRoute>
          <PrivateRoute path="/UpdateAccountDetails">
            <UpdateAccountDetails></UpdateAccountDetails>
          </PrivateRoute>
          <PrivateRoute path="/listings">
            <Listings></Listings>
          </PrivateRoute>
          <PrivateRoute path="/CreateListing">
            <CreateListing></CreateListing>
          </PrivateRoute>
          <PrivateRoute path="/navigation">
            <Navigation></Navigation>
          </PrivateRoute>
          <PrivateRoute path="/SingleListing/:listingId">
            <SingleListing></SingleListing>
          </PrivateRoute>
          <PrivateRoute path="/MyProfile">
            <MyProfile></MyProfile>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
