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
import TrainingDetail from '../components/Training/TrainingDetail/TrainingDetail';
import { loadTrainingCard } from '../helpers/loadTrainingCard';
import BusinessJobs from '../components/Jobs/BusinessJobs/BusinessJobs';
import {
  setTraining,
  startLoadingAllTrainings,
} from '../action/trainingCardAction';
import { startLoadingJobs } from '../action/jobsAction';
import FormProfile from '../components/Profile/Form/FormProfile';


const Router = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setIsLooggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLooggedIn(true);
        const training = await loadTrainingCard(user.uid);
        dispatch(setTraining(training));
        dispatch(startLoadingAllTrainings());
        dispatch(startLoadingJobs(user.uid));
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

  const privateRoutes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/contacto',
      component: Contact,
    },
    {
      path: '/empleos',
      component: Jobs,
    },
    {
      path: '/capacitaciones',
      component: Training,
    },
    {
      path: '/perfil',
      component: Profile,
    },
    {
      path: '/detalle-capacitacion',
      component: TrainingDetail,
    },
    {
      path: '/formulario-empresas',
      component: BusinessJobs,
    },
    {
      path: '/editar-perfil',
      component: FormProfile
    }
  ];
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
        {privateRoutes.map((route, index) => (
          <PrivateRoute
            exact
            path={route.path}
            key={`route-${index}`}
            component={route.component}
            isAuthenticated={isLooggedIn}
          />
        ))}
        <Redirect to='/magma' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
