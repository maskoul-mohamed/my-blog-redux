import { ADD_POST, SET_POSTS } from "../actionsType";
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
};

export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
});

export const startSetPosts = () => {
    return(dispatch, getState) => {
        return database.ref('posts').once('value').then((snapshot) => {
            const posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setPosts(posts));
        }) 
    }
};
