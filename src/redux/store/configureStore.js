import { createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


export default () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        applyMiddleware(ReduxThunk)
    )
    return store;
}