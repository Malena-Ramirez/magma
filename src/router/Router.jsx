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
import Join from '../containers/Join'
import SignUp from '../components/Signup/SignUp'

const Router = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/Join' component={Join}/>
                    <Route exact path='/Register' component={SignUp}/>
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
                    <Redirect to="/auth/Join" /> */}
                </Switch>
        </BrowserRouter>
    )
}

export default Router;
