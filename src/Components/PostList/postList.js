import React, { useEffect, useReducer } from 'react';
import { loadPosts, votePost } from './postList_services';

const initialState = [];

const postsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload;
        case 'UPVOTE_POST':
            votePost(action.id, 1);
            return state;
        case 'DOWNVOTE_POST':
            votePost(action.id, -1);
            return state;
        case 'REMOVE_VOTE_FROM_POST':
            votePost(action.id, 0);
            return state;
        default:
            return state;
    }
};

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
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.userVoteDirection}</p>
                        <p>{post.votesCount}</p>
                        <p>{post.createdAt}</p>
                        <p>{post.text}</p>
                        <p>{post.commentsCount}</p>
                        <p>{post.title}</p>
                        <p>{post.username}</p>
                        <button
                            onClick={() =>
                                dispatch({ type: 'UPVOTE_POST', id: post.id })
                            }
                        >
                            {post.userVoteDirection === 1 ? (
                                <p
                                    onClick={() =>
                                        dispatch({
                                            type: 'REMOVE_VOTE_FROM_POST',
                                            id: post.id,
                                        })
                                    }
                                >
                                    UPVOTED
                                </p>
                            ) : (
                                'Upvote'
                            )}
                        </button>
                        <button
                            onClick={() =>
                                dispatch({ type: 'DOWNVOTE_POST', id: post.id })
                            }
                        >
                            {post.userVoteDirection === -1 ? (
                                <p
                                    onClick={() =>
                                        dispatch({
                                            type: 'REMOVE_VOTE_FROM_POST',
                                            id: post.id,
                                        })
                                    }
                                >
                                    DOWNVOTED
                                </p>
                            ) : (
                                'Downvote'
                            )}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
