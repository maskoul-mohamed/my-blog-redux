import { ADD_POST } from "../actionsType";
import database from '../../firebase/firebase';


export const addPost = (post) => ({
    type: ADD_POST,
    post
});

export const startAddPost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user.uid;
        const {
            title= '',
            body= '',
            createdAt= 0,
            userName= ''
        } = postData;

        const post = { title, body, createdAt, userName };
        return database.ref(`posts/${uid}`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }))
        })
    }
}
