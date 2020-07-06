import React, { useEffect, useReducer } from 'react';
import labEdiit from '../../Services/labEdiit';

const initialState = [];

const postsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload;
        case 'VOTE_POST':
            return;
        case 'LOAD_POSTS':
            return;
        case 'LOAD_POSTS':
            return;

        default:
            return state;
    }
};

export default function PostList() {
    const [posts, dispatch] = useReducer(postsReducer, initialState);

    useEffect(() => {
        labEdiit
            .get('/posts', {
                headers: {
                    Authorization:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlneXB1dFRXMkRWMDVMMTZIbVE0IiwidXNlcm5hbWUiOiI0ZWRkaXQxIiwiZW1haWwiOiI0ZWRkaXQxQGdtYWlsLmNvbSIsImlhdCI6MTU5NDA2MzkzNX0.2-CdXwv-cKRrX51lambuneYl4GhxqVrPF3WqrqLqOZg',
                },
            })
            .then((response) => {
                dispatch({ type: 'LOAD_POSTS', payload: response.data.posts });
            });
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <p>{post.userVoteDirection}</p>
                        <p>{post.votesCount}</p>
                        <p>{post.createdAt}</p>
                        <p>{post.text}</p>
                        <p>{post.commentsCount}</p>
                        <p>{post.title}</p>
                        <p>{post.username}</p>
                    </div>
                );
            })}
        </div>
    );
}
