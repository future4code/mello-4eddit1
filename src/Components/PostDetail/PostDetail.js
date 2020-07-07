import React from 'react';
import styled from 'styled-components';

const DivComentario = styled.div`
    border: 1px solid;
`

const PostDetail = (props) => {
  return (
    <DivComentario key={props.post.id}>
      <h1>{props.post.username}</h1>
      <h2>{props.post.text}</h2>
      <div>Votos: {props.post.votesCount} - Comentários: {props.post.commentsCount}</div>
      <button onClick={props.like}>Curtir</button>
      <button onClick={props.dislike}>Descurtir</button>
      <div>
        <input 
          type='text' 
          onChange={props.changeInputValue}
          value={props.inputValue}
          />
        <button onClick={props.submitComment}>Comentar</button>
      </div>
    </DivComentario>
    )
}

export default PostDetail;