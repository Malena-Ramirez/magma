import { types } from "../types/types";
import { firebase, google } from "../firebase/firebaseConfig";

export const loginGoogle = () => {

    return (dispatch) => {

        firebase.auth().signInWithPopup(google).then(({ user }) => {
            dispatch(
                login(user.uid, user.displayName, user.email, user.photoURL)
            )
        })

    }

}

export const loginEmailPassword = (email, password) => {
    //devuelve un callback
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName, email)
                )
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const login = (id, displayName, email, photo = '') => {
    return {
        type: types.login,
        payload: {
            id,
            displayName,
            email,
            photo
        }
    }
}

export const registroEmailPasswordName = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName, email)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})