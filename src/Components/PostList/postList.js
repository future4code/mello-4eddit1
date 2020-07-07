import React, { useEffect, useReducer } from 'react';
import { loadPosts } from './postList_services';
import { postsReducer } from './reducer';
import PostFrame from '../PostFrame/postFrame';

export default function PostList() {
    const [posts, dispatch] = useReducer(postsReducer, []);

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
                return (
                    <PostFrame
                        id={post.id}
                        username={post.username}
                        title={post.title}
                        text={post.text}
                        votesCount={post.votesCount}
                        commentsCount={post.commentsCount}
                        userVoteDirection={post.userVoteDirection}
                        createdAt={post.createdAt}
                        dispatch={dispatch}
                    />
                );
            })}
        </>
    );
}
