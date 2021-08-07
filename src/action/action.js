import { types } from "../types/types";
import { firebase, google, db } from "../firebase/firebaseConfig";

export const loginGoogle = () =>{

    return (dispatch) =>{

        firebase.auth().signInWithPopup(google).then(({user}) =>{
            console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
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
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const login = (id, displayName)=>{
    return{
        type: types.login,
        payload:{
            id, 
            displayName
        }
    }
}

export const registroEmailPasswordName = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                console.log(user);

                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const jobsAction = (jobs) => {

    return async (dispatch, getState)=>{

        const state = getState().auth.uid 

        const newJobs = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // const docRef = await db.collection(`${uid}/empleos/formulario-empresas`).add(newJobs);
        // console.log(docRef);

    }

}