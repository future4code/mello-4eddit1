import React, { useReducer } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { postsReducer } from '../PostList/reducer';

export default function PostFrame({
    id,
    username,
    title,
    text,
    votesCount,
    commentsCount,
    userVoteDirection,
    createdAt,
}) {
    const [dispatch] = useReducer(postsReducer, []);

    return (
        <div>
            <p>{username}</p>
            <p>{title}</p>
            <p>{text}</p>
            <p>{votesCount}</p>
            <p>
                {formatDistanceToNow(createdAt, {
                    addSuffix: true,
                    includeSeconds: true,
                    locale: ptBR,
                })}
            </p>
            <p>{commentsCount} 🗨</p>
            <button onClick={() => dispatch({ type: 'UPVOTE_POST', id: id })}>
                {userVoteDirection === 1 ? (
                    <p
                        onClick={() =>
                            dispatch({
                                type: 'REMOVE_VOTE_FROM_POST',
                                id: id,
                            })
                        }
                    >
                        UPVOTED
                    </p>
                ) : (
                    'Upvote'
                )}
            </button>
            <button onClick={() => dispatch({ type: 'DOWNVOTE_POST', id: id })}>
                {userVoteDirection === -1 ? (
                    <p
                        onClick={() =>
                            dispatch({
                                type: 'REMOVE_VOTE_FROM_POST',
                                id: id,
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
}
