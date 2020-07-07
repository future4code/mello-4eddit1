import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import SignUp from './SignUp/signUp';
import PostDetails from './PostDetails/postDetails';
import Feed from './Feed/feed';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/posts" component={Feed} />
            <Route exact path="/posts/:id" component={PostDetails} />
        </Switch>
    );
}
