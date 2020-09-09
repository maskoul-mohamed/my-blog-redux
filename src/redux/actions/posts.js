import { ADD_POST, SET_POSTS, EDIT_POST, REMOVE_POST } from "../actionsType";
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
    return(dispatch) => {
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

export const editPost = (updates, id) => ({
    type: EDIT_POST,
    updates,
    id
});

export const startEditPost = (updates, id) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).update(updates).then(() => {
            dispatch(editPost(updates, id))
        });
    }
};

export const removePost = (id) => ({
    type: REMOVE_POST,
    id
});

export const startRemovePost = (id) => {
    return (dispatch) => {
        database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(id));
        })
    }
};