import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Join from '../containers/Join'

const AuthenticRouter = () => {
    return (
        <Switch>
            <Route
                exact
                path="/ingresar"
                component={Join}
            />
            <Redirect to="/landingpage" />
        </Switch>
    )
}

export default AuthenticRouter


