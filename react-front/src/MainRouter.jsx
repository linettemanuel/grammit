import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/login/Login';

const MainRouter = () => {
        return (
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/login' component={Login} />
                </Switch>
        );
}

export default MainRouter;
