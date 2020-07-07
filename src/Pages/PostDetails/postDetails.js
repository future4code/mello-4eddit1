import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import labeEdiit from '../../Services/labEdiit'

export default function PostDetails() {
  const params = useParams();
  const [id, setId] = useState({idMock: '060ArFua9saK6pXR7xfO'});
  const [post, setPost] = useState(undefined);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    //Authorizatio mockado
    labeEdiit.get(`posts/${id.idMock}`, 
      {headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlneXB1dFRXMkRWMDVMMTZIbVE0IiwidXNlcm5hbWUiOiI0ZWRkaXQxIiwiZW1haWwiOiI0ZWRkaXQxQGdtYWlsLmNvbSIsImlhdCI6MTU5NDA2MzI0OH0.lDsqRWdv0P3rr-X420atyvZACTdtrMMjpDTxsTS-tF0'
      }})
      .then(response => {
        setPost(response.data.post);
        console.log(response.data.post)
      })
      .catch(error => {
        console.log(error);
      })
  },[]);

  return (
    <div>
      <h1>PostDetails {id.idMock}</h1>
      {post !== undefined && 
      <div key={post.id}>
        <h1>{post.username}</h1>
        <h2>{post.text}</h2>
        <div>Votos: {post.votesCount} - Comentários: {post.commentsCount}</div>
        <div>
          <input 
            type='text' />
          <button>Comentar</button>
        </div>
        {post.comments.map(comment => {
          return <div key={comment.id}>
            <strong>{comment.username}</strong>
            <div>{comment.text}</div>
            <div>Votos: {comment.votesCount}</div>
          </div>
        })}
      </div>}
    </div>
  );
}
