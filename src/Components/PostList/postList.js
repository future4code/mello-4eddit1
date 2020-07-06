import React, { useEffect, useReducer } from 'react';
import { loadPosts } from './postList_services';
import { postsReducer } from './reducer';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <p>{post.username}</p>
                        <p>{post.title}</p>
                        <p>{post.text}</p>
                        <p>{post.votesCount}</p>
                        <p>
                            {formatDistanceToNow(post.createdAt, {
                                addSuffix: true,
                                includeSeconds: true,
                                locale: ptBR,
                            })}
                        </p>
                        <p>{post.commentsCount} 🗨</p>
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
