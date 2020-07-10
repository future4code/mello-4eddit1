import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render , fireEvent, wait, getByText, getByTestId, getByPlaceholderText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import labEddit from '../../Services/labEdiit';
import App from './App';
import LandingPage from './Pages/Landing/landingPage';
import LoginPage from './Pages/Login/loginPage';
import FeedPage from './Pages/Feed/feedPage';
import Axios from 'axios';
import labEdiit from './Services/labEdiit';
import Feed from './Pages/Feed/feedPage';


labEdiit.get = jest.fn().mockResolvedValue({posts: []})
Axios.post = jest.fn().mockResolvedValue();

test('LandingPage route LoginPage', () => {
    const history = createMemoryHistory();
    const { getByTestId, getByText } = render(
        <Router history={history}>
            <App />
        </Router>);
    
    const login = getByTestId(/btn-login/i);
    expect(login).toBeInTheDocument();
    fireEvent.click(login);
    const enter = getByText(/Entrar/i);
    expect(enter).toBeInTheDocument();
});

test('LandingPage route SignUpPage', async () => {
    const history = createMemoryHistory();
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}>
            <App />
        </Router>);
    
    const signUp = getByText(/cadastrar/i);
    expect(signUp).toBeInTheDocument();
    fireEvent.click(signUp);
    const userName = getByPlaceholderText(/Nome de Usuário/i);
    userEvent.type(userName, "admin");
    expect(userName).toBeInTheDocument('admin');
    //expect(userName).toHaveValue('admin');

    const email = getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
    userEvent.type(email, "admin@admin.com.br");

    const password = getByPlaceholderText(/senha/i);
    expect(password).toBeInTheDocument();
    userEvent.type(password, "admin");

    const btnSignUp = getByTestId(/btn-signup/i);
    fireEvent.submit(btnSignUp);
    
    expect(Axios.post).toHaveBeenCalledTimes(1);

    const inputEmail = getByPlaceholderText(/Email/i);
    userEvent.type(inputEmail, 'admin@admin.com.br');
    const inputPassword = getByPlaceholderText(/Senha/i);
    userEvent.type(inputPassword, 'admin');
    const btnEnter = getByText(/Entrar/i);
    fireEvent.click(btnEnter);

    wait(() => {
        const feed = getByText(/Feed/i);
        expect(feed).toBeInTheDocument('Feed');
    });
});

test('Feed', () => {

    Axios.get = jest.fn().mockResolvedValue({
        posts: [
            {
            "comments": [
                {
                    "userVoteDirection": 0,
                    "id": "EiKumukbqDWWlWqfcogX",
                    "votesCount": -1,
                    "createdAt": 1591990686529,
                    "username": "usuario_padrao",
                    "text": "comentario padrao"
                },
                {
                    "userVoteDirection": 0,
                    "id": "xPGlXP51YIdH3N4AkWaE",
                    "createdAt": 1594152919820,
                    "votesCount": 0,
                    "username": "admin",
                    "text": "Comentando"
                }
            ],
            "userVoteDirection": 0,
            "id": "0NK4I1fhiAMoCZ8ooFFb",
            "votesCount": 8,
            "createdAt": 1591990585598,
            "text": "post padrao",
            "commentsCount": 2,
            "title": "titulo padrao",
            "username": "usuario_padrao"
            }
        ]
    });

    const history = createMemoryHistory();
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}>
            <Feed />
        </Router>);

    wait(() => {
        const inputSearch = getByPlaceholderText(/Busque um post/i);
        expect(inputSearch).toBeInTheDocument('Busque um post');
        userEvent.type(inputSearch, 'titulo');
        expect(Axios.get).toHaveBeenCalled();
        const usernamePost = getByText(/usuario_padrao/i);
        expect(usernamePost).toBeInTheDocument(/usuario_padrao/i);
        const votePostFeed = getByTestId(/votePostFeed/i);
        expect(votePostFeed).toBeInTheDocument();
        userEvent.click(votePostFeed);
        const votesPost = getByTestId(/votes-count/i);
        expect(votesPost).toBeInTheDocument('10 votos');
        
    });

})