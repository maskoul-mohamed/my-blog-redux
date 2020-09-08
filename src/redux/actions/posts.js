import { ADD_POST } from "../actionsType";
import database from '../../firebase/firebase';


export const addPost = (post) => ({
    type: ADD_POST,
    post
});

export const startAddPost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user.uid;
        const userName = getState().auth.user.displayName;
        const {
            title= '',
            body= '',
            createdAt= 0
        } = postData;
        
        const post = { title, body, createdAt, user:{ uid, userName} };
        return database.ref(`posts`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }))
        })
    }
}
