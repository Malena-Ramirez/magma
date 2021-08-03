import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import App from '../containers/App';
import AuthenticRouter from './AuthenticRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { login } from '../action/action';
import Home from '../containers/Home/Home';
import { Spinner } from 'react-bootstrap';
import AboutUs from '../containers/AboutUs/AboutUs';
import GlobalStyle from '../components/GlobalStyles/globalStyles';
import Contact from '../components/Contact/Contact';
import Jobs from '../components/Jobs/Jobs';
import Training from '../components/Training/Training';
import Profile from '../components/Profile/Profile';

const Router = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setIsLooggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLooggedIn(true);
      } else {
        setIsLooggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return (
      <div className='w-100 h-100 mt-5 d-flex justify-content-center lign-items-center'>
        <Spinner className='mt-5' animation='border' variant='warning' />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <PublicRoute
          path='/ingresar'
          component={AuthenticRouter}
          isAuthenticated={isLooggedIn}
        />
        <PublicRoute
          exact
          path='/magma'
          component={App}
          isAuthenticated={isLooggedIn}
        />
        <PublicRoute
          exact
          path='/nosotros'
          component={AboutUs}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path='/'
          component={Home}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path='/contacto'
          component={Contact}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path='/empleos'
          component={Jobs}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path='/capacitaciones'
          component={Training}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path='/perfil'
          component={Profile}
          isAuthenticated={isLooggedIn}
        />
        <Redirect to='/magma' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
