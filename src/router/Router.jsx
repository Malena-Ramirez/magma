<<<<<<< HEAD
import React from 'react'
import {
    BrowserRouter ,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';  
import App from '../containers/App'
import AuthenticRouter from './AuthenticRouter'
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import Join from "../components/Join/Join";
import SignUp from "../components/Signup/SignUp"
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import App from '../containers/App';
import AuthenticRouter from './AuthenticRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { login } from '../action/action';
import home from '../containers/home';
import { Spinner } from 'react-bootstrap';
>>>>>>> 7e7c61a5516f53aa974d08e158a80f73ed19a13c

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
      <Switch>
        <PublicRoute
          path='/ingresar'
          component={AuthenticRouter}
          isAuthenticated={isLooggedIn}
        />
        <PublicRoute
          exact
          path='/landingpage'
          component={App}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path='/'
          component={home}
          isAuthenticated={isLooggedIn}
        />
        <Redirect to='/landingpage' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
