import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import labEdiit from '../../Services/labEdiit'
import Comments from "../../Components/Comments";
import PostDetail from "../../Components/PostDetail";

//Authorization mockado
const auth = {
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlneXB1dFRXMkRWMDVMMTZIbVE0IiwidXNlcm5hbWUiOiI0ZWRkaXQxIiwiZW1haWwiOiI0ZWRkaXQxQGdtYWlsLmNvbSIsImlhdCI6MTU5NDA2MzI0OH0.lDsqRWdv0P3rr-X420atyvZACTdtrMMjpDTxsTS-tF0'
}}
export default function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState(undefined);
  const [inputValue, setInputValue] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    getPost();
  },[setPost]);

  const getPost = () => {
    labEdiit.get(`posts/${params.id}`, 
    auth)
    .then(response => {
      setPost(response.data.post);
      console.log(response.data.post)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const likePost = () => {
    let data
    (post.userVoteDirection === 1) ?
      (data = { "direction": 0 })
    :
      (data = { "direction": 1 })

    labEdiit.put(`posts/${params.id}/vote`, data, auth)
      .then(response => {
        console.log(response)
        getPost();
      })
  }

  const dislikePost = () => {
    let data
    (post.userVoteDirection === -1) ?
      (data = { "direction": 0 })
    :
      (data = { "direction": -1 })
    
    labEdiit.put(`posts/${params.id}/vote`, data, auth)
      .then(response => {
        console.log(response)
        getPost();
      })
  }

  const likeComment = (comment) => {
    let data
    (comment.userVoteDirection === 1) ?
      (data = { "direction": 0 })
    :
      (data = { "direction": 1 })
    labEdiit.put(`posts/${params.id}/comment/${comment.id}/vote`, data, auth)
      .then(response => {
        console.log(response)
        getPost();
      })
  }

  const dislikeComment = (comment) => {
    let data
    (comment.userVoteDirection === -1) ?
      (data = { "direction": 0 })
    :
      (data = { "direction": -1 })
    
    labEdiit.put(`posts/${params.id}/comment/${comment.id}/vote`, data, auth)
      .then(response => {
        console.log(response)
        getPost();
      })
  }

  const onChangeComment = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  }

  const submitComment = () => {
    console.log(inputValue);
    const data = {
      "text": inputValue
    }

    labEdiit.post(`posts/${params.id}/comment`, data, auth)
      .then(response=> {
        console.log(response);
        setInputValue('')
        getPost();
      })
  }

  return (
    <>
      {post !== undefined && <>
      <PostDetail 
        key={post.id} 
        post={post} 
        like={likePost} 
        dislike={dislikePost}
        changeInputValue={onChangeComment} 
        submitComment={submitComment}
        inputValue={inputValue}
        />
        {post.comments.map(comment => {
          return (
            <Comments 
              key={comment.id} 
              comments={comment}
              like={likeComment}
              dislike={dislikeComment}
              />)
        })}
      </>}
    </>);
}
