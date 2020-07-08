import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ ...props }) {
    const runClientAuthCheck = () => {
        const token = localStorage.getItem('token');
        return String(token).length > 10 && token != null ? true : false;
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
