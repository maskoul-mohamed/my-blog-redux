import { ADD_POST, SET_POSTS, EDIT_POST } from "../actionsType";

const initialState = []

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return [
                ...state,
                action.post
            ];
        case SET_POSTS:
            return action.posts;
        case EDIT_POST:
            return state.map((post) => {
                    if(post.id === action.id){
                        return {
                            ...post,
                            ...action.updates
                        }
                    } else {
                        return post
                    }
                });
        default:
            return state;
    }
};