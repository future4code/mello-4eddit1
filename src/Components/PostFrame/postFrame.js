import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { Container, Text } from './postFrame_styles';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

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
    fetchData,
}) {
    const handleVote = (param) => () => {
        dispatch({
            type: param ? 'UPVOTE_POST' : 'DOWNVOTE_POST',
            id: id,
            direction: userVoteDirection,
        });
        fetchData();
    }; //thunk !

    return (
        <Container>
            <Link to={`/posts/${id}`}>
                <h1>{username}</h1>
                <h3>{title}</h3>
                <Text>{text}</Text>
                <div>
                    <p>{votesCount} votos</p>
                    <p>
                        {formatDistanceToNow(createdAt, {
                            addSuffix: true,
                            includeSeconds: true,
                            locale: ptBR,
                        })}
                    </p>
                    <p>{commentsCount} 🗨</p>
                </div>
            </Link>
            <span>
                <b role="emoji" onClick={handleVote(true)}>
                    <AiFillLike />
                </b>
                {userVoteDirection}
                <b role="emoji" onClick={handleVote(false)}>
                    <AiFillDislike />
                </b>
            </span>
        </Container>
    );
}
