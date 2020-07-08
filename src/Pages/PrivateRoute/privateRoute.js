import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { checkAuth } from './privateRoute_services';

export function PrivateRoute({ ...props }) {
    const history = useHistory();

    useEffect(() => {
        setTimeout(async () => {
            await checkRoutePermission();
        }, 2000);
    }, [history]);

    const runClientAuthCheck = () => {
        const token = localStorage.getItem('token');
        return String(token).length > 10 && token != null ? true : false;
    };

    const checkRoutePermission = async () => {
        const check = await checkAuth();
        console.log(check);
        if (check === false) {
            setTimeout(() => {
                localStorage.clear();
                history.push('/ogin');
            }, 1000);
        }
    };

    return runClientAuthCheck() ? (
        <Route {...props} />
    ) : (
        <Redirect to="/login" />
    );
}

export function LoginRoute({ ...props }) {
    const history = useHistory();

    const runClientAuthCheck = () => {
        const token = localStorage.getItem('token');
        return String(token).length > 10 && token != null ? true : false;
    };

    useEffect(() => {
        setTimeout(async () => {
            await checkRoutePermission();
        }, 2000);
    }, [history]);

    const checkRoutePermission = async () => {
        const check = await checkAuth();
        console.log(check);
        if (check === false) {
            localStorage.clear();
        }
    };

    return runClientAuthCheck() ? (
        <Redirect to="/feed" />
    ) : (
        <Route {...props} />
    );
}
