import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';

export default function PostFrame({
    id,
    username,
    title,
    text,
    votesCount,
    commentsCount,
    userVoteDirection,
    createdAt,
    dispatch,
}) {
    return (
        <div>
            <Link to={`/posts/${id}`}>
                <p>{username}</p>
            </Link>
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
                UP
            </button>
            <button onClick={() => dispatch({ type: 'DOWNVOTE_POST', id: id })}>
                DOWN
            </button>
        </div>
    );
}
