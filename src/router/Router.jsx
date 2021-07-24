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
import LogIn from '../containers/LogIn'

const Router = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/login' component={LogIn}/>
                    {/* <PublicRoute
                        path="/auth"
                        component={AuthenticRouter}
                        isAuthenticated ={false}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={App}
                        isAuthenticated ={true}
                    />
                    <Redirect to="/auth/login" /> */}
                </Switch>
        </BrowserRouter>
    )
}

export default Router;
