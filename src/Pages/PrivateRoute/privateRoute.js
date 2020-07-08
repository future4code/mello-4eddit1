import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { checkAuth } from './privateRoute_services';

export function PrivateRoute({ ...props }) {
    const history = useHistory();

    useEffect(() => {
        checkRoutePermission();
    }, []);

    const runClientAuthCheck = () => {
        const token = localStorage.getItem('token');
        return String(token).length > 10 && token != null ? true : false;
    };

    const checkRoutePermission = async () => {
        const check = await checkAuth();
        if (!check) {
            history.replace('/login');
        }
    };

    return runClientAuthCheck() ? (
        <Route {...props} />
    ) : (
        <Redirect to="/login" />
    );
}

export function LoginRoute({ ...props }) {
    const runClientAuthCheck = () => {
        const token = localStorage.getItem('token');
        return String(token).length > 10 && token != null ? true : false;
    };

    return runClientAuthCheck() ? (
        <Redirect to="/feed" />
    ) : (
        <Route {...props} />
    );
}
