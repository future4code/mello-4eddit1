import { votePost } from './postList_services';

export const initialState = [
    {
        userVoteDirection: -1,
        id: 'WCmBIGyynC5ihJFUmHFf',
        text: 'ait!',
        commentsCount: 1,
        title: 'Titulo aqui!',
        username: 'darvas',
        votesCount: -1,
        createdAt: 1591622901616,
    },
];

export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload === undefined ? state : action.payload;
        case 'UPVOTE_POST':
            if (action.direction === 0 || action.direction === -1) {
                votePost(action.id, 1);
            } else {
                votePost(action.id, 0);
            }
            return state;
        case 'DOWNVOTE_POST':
            if (action.direction === 0 || action.direction === 1) {
                votePost(action.id, -1);
            } else {
                votePost(action.id, 0);
            }
            return state;
        case 'REMOVE_VOTE_FROM_POST':
            votePost(action.id, 0);
            return state;
        default:
            return state;
    }
};
