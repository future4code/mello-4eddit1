import React from 'react';

const Comments = (props) => {
  return(
    <div key={props.comments.id}>
        <strong>{props.comments.username}</strong>
        <div>{props.comments.text}</div>
        <div>Votos: {props.comments.votesCount}</div>
    </div>  
  )
}

export default Comments;