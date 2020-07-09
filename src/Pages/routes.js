import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import SignUp from './SignUp/signUp';
import PostDetails from './PostDetails/postDetails';
import Feed from './Feed/feed';
import { PrivateRoute, LoginRoute } from './PrivateRoute/privateRoute';
import HeaderLogin from '../Components/Header/HeaderLogin';
import HeaderLogout from '../Components/Header/HeaderLogout';

export default function Routes() {
    return (
        <Switch>
 <Route exact path="/" component={Landing}>
                <HeaderLogin />
                <Landing />
            </Route>
            <LoginRoute exact path="/login" component={Login} >
                <HeaderLogin />
                <Login />
            </LoginRoute>
            <LoginRoute exact path="/signup" component={SignUp} >
                <HeaderLogin />
                <SignUp />
            </LoginRoute>
            <PrivateRoute exact path="/feed" component={Feed} >
                <HeaderLogout />
                <Feed />
            </PrivateRoute>
            <PrivateRoute exact path="/posts/:id" component={PostDetails} >
                <HeaderLogout />
                <PostDetails />
            </PrivateRoute>
        </Switch>
    );
}
