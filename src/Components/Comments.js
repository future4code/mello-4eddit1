import React from 'react';

const Comments = (props) => {
  return(
    <div key={props.comments.id}>
        <strong>{props.comments.username}</strong>
        <div>{props.comments.text}</div>
        <div>Votos: {props.comments.votesCount}</div>
        <button onClick={() => props.like(props.comments)}>Curtir</button>
        <button onClick={() => props.dislike(props.comments)}>Descurtir</button>
    </div>  
  )
}

export default Comments;