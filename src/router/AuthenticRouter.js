import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LogIn from '../containers/LogIn'

const AuthenticRouter = () => {
    return (
        <Switch>
            <Route 
                exact
                path="/auth/login"
                component={LogIn}
            />
            <Route 
                exact
                path="/auth/register"
                component={ LogIn }
            />
            <Redirect to="/auth/login" />
        </Switch>
    )
}

export default AuthenticRouter


