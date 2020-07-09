import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import SignUp from './SignUp/signUp';
import PostDetails from './PostDetails/postDetails';
import Feed from './Feed/feed';
import { PrivateRoute, LoginRoute } from './PrivateRoute/privateRoute';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <LoginRoute exact path="/login" component={Login} />
            <LoginRoute exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/feed" component={Feed} />
            <PrivateRoute exact path="/posts/:id" component={PostDetails} />
        </Switch>
    );
}
