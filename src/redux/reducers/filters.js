import { 
    SET_TEXT_FILTER, 
    SET_SORT_BY_NEWEST, 
    SET_SORT_BY_OLDEST, 
    SET_START_DATE,
    SET_END_DATE
    } from "../actionsType";

const initialState = {
    text:'',
    sortBy: 'newest',
    startDate: undefined,
    endDate: undefined
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            };
        case SET_SORT_BY_NEWEST:
            return {
                ...state,
                sortBy: 'newest'
            };
        case SET_SORT_BY_OLDEST:
            return {
                ...state,
                sortBy: 'oldest'
            };
        case SET_START_DATE:
            return {
                ...state,
                startDate: action.startDate
            };
        case SET_END_DATE:
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};