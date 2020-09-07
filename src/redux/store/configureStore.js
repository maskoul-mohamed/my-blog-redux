import { createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filters: filtersReducer
        }),
        applyMiddleware(ReduxThunk)
    )
    return store;
}