import React from 'react';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { Container, Text, Footer } from './postFrame_styles';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    RedditIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'react-share';

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
            <Footer>
                <FacebookShareButton
                    url={`${window.location.host}/posts/${id}`}
                >
                    <FacebookIcon size={50} />
                </FacebookShareButton>
                <TwitterShareButton url={`${window.location.host}/posts/${id}`}>
                    <TwitterIcon size={50} />
                </TwitterShareButton>
                <RedditShareButton url={`${window.location.host}/posts/${id}`}>
                    <RedditIcon size={50} />
                </RedditShareButton>
                <WhatsappShareButton
                    url={`${window.location.host}/posts/${id}`}
                >
                    <WhatsappIcon size={50} />
                </WhatsappShareButton>

                <LinkedinShareButton
                    url={`${window.location.host}/posts/${id}`}
                >
                    <LinkedinIcon size={50} />
                </LinkedinShareButton>
            </Footer>
        </Container>
    );
}
