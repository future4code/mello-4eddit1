import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import labEdiit from '../../Services/labEdiit';
import Comments from '../../Components/Comments/Comments';
import PostDetail from '../../Components/PostDetail/PostDetail';

//Authorization mockado
const auth = {
    headers: {
        Authorization: localStorage.getItem('token'),
    },
};

export default function PostDetails() {
    const params = useParams();
    const [post, setPost] = useState(undefined);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        labEdiit
            .get(`posts/${params.id}`, auth)
            .then((response) => {
                setPost(response.data.post);
                console.log(response.data.post);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const likePost = () => {
        let data;
        post.userVoteDirection === 1
            ? (data = { direction: 0 })
            : (data = { direction: 1 });

        labEdiit.put(`posts/${params.id}/vote`, data, auth).then((response) => {
            console.log(response);
            getPost();
        });
    };

    const dislikePost = () => {
        let data;
        post.userVoteDirection === -1
            ? (data = { direction: 0 })
            : (data = { direction: -1 });

        labEdiit.put(`posts/${params.id}/vote`, data, auth).then((response) => {
            console.log(response);
            getPost();
        });
    };

    const likeComment = (comment) => {
        let data;
        comment.userVoteDirection === 1
            ? (data = { direction: 0 })
            : (data = { direction: 1 });
        labEdiit
            .put(`posts/${params.id}/comment/${comment.id}/vote`, data, auth)
            .then((response) => {
                console.log(response);
                getPost();
            });
    };

    const dislikeComment = (comment) => {
        let data;
        comment.userVoteDirection === -1
            ? (data = { direction: 0 })
            : (data = { direction: -1 });

        labEdiit
            .put(`posts/${params.id}/comment/${comment.id}/vote`, data, auth)
            .then((response) => {
                console.log(response);
                getPost();
            });
    };

    const onChangeComment = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    const submitComment = () => {
        console.log(inputValue);
        const data = {
            text: inputValue,
        };

        labEdiit
            .post(`posts/${params.id}/comment`, data, auth)
            .then((response) => {
                console.log(response);
                setInputValue('');
                getPost();
            });
    };

    return (
        <>
            {post !== undefined && (
                <>
                    <PostDetail
                        key={post.id}
                        post={post}
                        like={likePost}
                        dislike={dislikePost}
                        changeInputValue={onChangeComment}
                        submitComment={submitComment}
                        inputValue={inputValue}
                    />
                    {post.comments.map((comment) => {
                        return (
                            <Comments
                                key={comment.id}
                                comments={comment}
                                like={likeComment}
                                dislike={dislikeComment}
                            />
                        );
                    })}
                </>
            )}
        </>
    );
}
