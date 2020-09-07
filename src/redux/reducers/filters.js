
const initialState = {
    text:'',
    sortBy: 'newest',
    startDate: undefined,
    endDate: undefined
};

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};