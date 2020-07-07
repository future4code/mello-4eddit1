import { votePost } from './postList_services';

export const initialState = [];

export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload;
        case 'UPVOTE_POST':
            votePost(action.id, 1);
            return state;
        case 'DOWNVOTE_POST':
            votePost(action.id, -1);
            return state;
        case 'REMOVE_VOTE_FROM_POST':
            votePost(action.id, 0);
            return state;
        default:
            return state;
    }
};
