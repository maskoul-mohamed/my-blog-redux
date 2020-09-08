import { firebase, googleAuthProvider } from '../../firebase/firebase';
import { LOGIN, LOGOUT } from '../actionsType';

export const login = (uid, displayName) => ({
    type: LOGIN,
    user: {
        displayName,
        uid
    }
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}


export const logout = () => ({
    type: LOGOUT
});

export const startLogout = () => {
    return() => {
        firebase.auth().signOut();
    }
}
