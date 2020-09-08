import { LOGIN, LOGOUT } from "../actionsType";

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return  {
                user: { ...action.user}
            };
        case LOGOUT:
            return initialState;
        default:
            return state
    };
}