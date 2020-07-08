import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { Container, Text } from './postFrame_styles';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { loadPosts } from '../PostList/postList_services';

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
    async function fetchData() {
        const apiCall = await loadPosts();
        dispatch({ type: 'LOAD_POSTS', payload: apiCall });
    }

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
                <b
                    role="emoji"
                    onClick={() => {
                        dispatch({
                            type: 'UPVOTE_POST',
                            id: id,
                            direction: userVoteDirection,
                        });
                        fetchData();
                    }}
                >
                    <AiFillLike />
                </b>
                {userVoteDirection}
                <b
                    role="emoji"
                    onClick={() => {
                        dispatch({
                            type: 'DOWNVOTE_POST',
                            id: id,
                            direction: userVoteDirection,
                        });
                        fetchData();
                    }}
                >
                    <AiFillDislike />
                </b>
            </span>
        </Container>
    );
}
