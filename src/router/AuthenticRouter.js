import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Join from "../components/Join/Join";

const AuthenticRouter = () => {
    return (
        <Switch>
            <Route 
                exact
                path="/auth/Join"
                component={Join}
            />
            <Route 
                exact
                path="/auth/register"
                component={ Join }
            />
            <Redirect to="/auth/Join" />
        </Switch>
    )
}

export default AuthenticRouter


