import React, { useEffect, useReducer } from 'react';
import { loadPosts } from './postList_services';
import { postsReducer, initialState } from './reducer';
import PostFrame from '../PostFrame/postFrame';

export default function PostList() {
    const [posts, dispatch] = useReducer(postsReducer, initialState);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const postsPayload = await loadPosts();
        dispatch({ type: 'LOAD_POSTS', payload: postsPayload });
    }

    return (
        <>
            {posts.map((post) => {
                return <PostFrame {...post} dispatch={dispatch} />;
            })}
        </>
    );
}
