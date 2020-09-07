import { ADD_POST } from "../actionsType";

const initialState = []

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return [
                ...state,
                action.post
            ]
        default:
            return state;
    }
};