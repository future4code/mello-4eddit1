import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import {
  DivContainer, DivPost, DivLikeDislike
} from './style';

const Comments = (props) => {

  return(
    <DivContainer key={props.comments.id}>
        <strong>@{props.comments.username}</strong>
        <DivPost>{props.comments.text}</DivPost>
        <div>Votos: {props.comments.votesCount}</div>
        <DivLikeDislike>
          <ThumbUpIcon 
            titleAccess="curtir"
            cursor="pointer"
            onClick={() => props.like(props.comments)} />
        </DivLikeDislike>
        <DivLikeDislike>
          <ThumbDownIcon 
            titleAccess="descurtir"
            cursor="pointer"
            onClick={() => props.dislike(props.comments)} />
        </DivLikeDislike>
    </DivContainer>  
  )
}

export default Comments;